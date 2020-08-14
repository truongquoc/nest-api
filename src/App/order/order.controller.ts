import {
  Controller,
  UseGuards,
  HttpException,
  HttpStatus,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { BaseController } from 'src/common/Base/base.controller';
import { Order } from 'src/entity/order.entity';
import { OrderService } from './order.service';
import { UserRepository } from '../users/user.repository';
import { OrderRepository } from './order.repository';
import {
  Crud,
  Override,
  ParsedRequest,
  CrudRequest,
  ParsedBody,
} from '@nestjsx/crud';
import { AuthGuard } from '../auth/auth.guard';
import { ACGuard } from 'nest-access-control';
import { User } from 'src/common/decorators/user.decorator';
import { BookRepository } from '../books/book.repository';
import { getManager } from 'typeorm';
import { OrderDTO } from './order.dto';
import { ApiTags } from '@nestjs/swagger';
import { OrderItemRepository } from './orderItem.repository';

@Crud({
  model: {
    type: Order,
  },
  params: {
    id: {
      type: 'uuid',
      field: 'id',
      primary: true,
    },
  },
  query: {
    filter: [],
    join: {},
  },
})
@ApiTags('v1/orders')
@Controller('api/v1/order')
export class OrderController extends BaseController<Order> {
  constructor(
    public service: OrderService,
    private readonly repository: OrderRepository,
    private readonly authorRepository: UserRepository,
    private readonly bookRepository: BookRepository,
    private readonly orderItemRepository: OrderItemRepository,
  ) {
    super(repository);
  }

  @Override('createOneBase')
  @UseGuards(AuthGuard, ACGuard)
  async createOne(
    @ParsedRequest() crud: CrudRequest,
    @ParsedBody() dto: Order,
    @User() user,
  ) {
    const manager = getManager();
    const mapId = [];
    console.log('user', user);
    const author = await this.authorRepository.findOne({
      where: { id: user.users.id },
    });
    dto.orderItems.forEach(item => {
      mapId.push(item['id']);
    });
    console.log('map', mapId);

    const orderItem = await this.bookRepository.findByIds(mapId);
    if (!orderItem) {
      throw new HttpException(
        {
          message: 'Item Not Found',
          status: HttpStatus.NOT_FOUND,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    dto.orderItems.forEach((order, index) => {
      const data = orderItem.find(item => item.id == order['id']);
      // console.log(data);

      // data['prices'].forEach(price => {
      //   console.log(price);
      // });

      // if(order['format'] == 'f1') {

      // }

      const found = data.prices.find(
        element => element.format == order['format'],
      );
      order['price'] = found.price;
    });

    let total = 0;
    dto.orderItems.forEach(order => {
      total += order['price'] * order['quantity'];
    });
    dto['total'] = total;

    // console.log('orderItem', orderItem);

    const order = this.repository.create({ ...dto, user: author });
    await this.repository.save(order);
    const orderdata = await this.repository.find({
      take: 1,
      order: { createdAt: 'DESC' },
    });

    dto.orderItems.forEach(async item => {
      const orderOne = await this.bookRepository.findOne({
        where: { id: item['id'] },
      });

      await manager.query(
        `INSERT INTO order_item values(${item['quantity']}, ${orderOne.prices[0].price},${orderdata[0].id},${orderOne.id})`,
      );
    });

    // const index = orderItem.find(item => item.id == 12);
    // console.log(index);
  }

  @Post('price')
  async getPriceByQuantiy(@Body() dto: OrderDTO) {
    const book = await this.bookRepository.findOne({
      where: { id: dto.id },
      relations: ['prices'],
    });
    if (book.prices[0].format == dto.format) {
      return book.prices[0].price * dto.quantity;
    }
    if (book.prices[1].format == dto.format) {
      return book.prices[1].price * dto.quantity;
    }
    if (book.prices[2].format == dto.format) {
      return book.prices[2].price * dto.quantity;
    }
  }
}
