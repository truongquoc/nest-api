import { EntityRepository, Repository } from 'typeorm';
import { Address } from 'src/entity/address.entity';
@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {}
