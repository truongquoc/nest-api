import {
  Controller,
  UseGuards,
  HttpException,
  HttpStatus,
  Get,
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
@Controller('api/v1/order')
export class OrderController extends BaseController<Order> {
  constructor(
    public service: OrderService,
    private readonly repository: OrderRepository,
    private readonly authorRepository: UserRepository,
    private readonly bookRepository: BookRepository,
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
    const orderItem = await this.bookRepository.findByIds([11, 2]);
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
      console.log(order);

      // if(order['format'] == 'f1') {

      // }

      const found = data.prices.find(
        element => element.format == order['format'],
      );
      order['price'] = found.price;
    });

    console.log('dto', dto);
    let total = 0;
    dto.orderItems.forEach(order => {
      total += order['price'] * order['quantity'];
    });
    dto['total'] = total;
    const order = this.repository.create(dto);
    await this.repository.save(order);
    // const index = orderItem.find(item => item.id == 12);
    // console.log(index);
  }

  @Get('price')
  async getPriceByQuantiy(@ParsedBody() dto: OrderDTO) {
    console.log(dto);
  }
}
