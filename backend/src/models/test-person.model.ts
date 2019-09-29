import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class TestPerson extends Entity {
  @property({
    type: 'number',
    id: true,
    required: false,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  pass: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TestPerson>) {
    super(data);
  }
}

export interface TestPersonRelations {
  // describe navigational properties here
}

export type TestPersonWithRelations = TestPerson & TestPersonRelations;
