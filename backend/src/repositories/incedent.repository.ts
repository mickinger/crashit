import {DefaultCrudRepository} from '@loopback/repository';
import {Incedent, IncedentRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class IncedentRepository extends DefaultCrudRepository<
  Incedent,
  typeof Incedent.prototype.externalId,
  IncedentRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Incedent, dataSource);
  }
}
