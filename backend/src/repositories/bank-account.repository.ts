import {DefaultCrudRepository} from '@loopback/repository';
import {BankAccount, BankAccountRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BankAccountRepository extends DefaultCrudRepository<
  BankAccount,
  typeof BankAccount.prototype.iban,
  BankAccountRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(BankAccount, dataSource);
  }
}
