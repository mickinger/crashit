import {DefaultCrudRepository} from '@loopback/repository';
import {TestPerson, TestPersonRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TestPersonRepository extends DefaultCrudRepository<
  TestPerson,
  typeof TestPerson.prototype.id,
  TestPersonRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TestPerson, dataSource);
  }
}
