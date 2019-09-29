import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Incedent extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
    generated: false,
  })
  externalId: number;

  @property({
    type: 'string',
    required: true,
  })
  aggrieved: string;

  @property({
    type: 'string',
    required: true,
  })
  branch: string;

  @property({
    type: 'string',
    required: true,
  })
  accident: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Incedent>) {
    super(data);
  }
}

export interface IncedentRelations {
  // describe navigational properties here
}

export type IncedentWithRelations = Incedent & IncedentRelations;
