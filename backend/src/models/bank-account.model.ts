import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class BankAccount extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
    generated: false,
  })
  iban: string;

  @property({
    type: 'string',
    required: true,
  })
  bic: string;

  @property({
    type: 'string',
    required: true,
  })
  institute: string;

  @property({
    type: 'string',
    required: true,
  })
  owner: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BankAccount>) {
    super(data);
  }
}

export interface BankAccountRelations {
  // describe navigational properties here
}

export type BankAccountWithRelations = BankAccount & BankAccountRelations;
