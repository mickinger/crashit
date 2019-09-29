import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Incedent} from '../models';
import {IncedentRepository} from '../repositories';

export class IncedentController {
  constructor(
    @repository(IncedentRepository)
    public incedentRepository : IncedentRepository,
  ) {}

  @post('/incedents', {
    responses: {
      '200': {
        description: 'Incedent model instance',
        content: {'application/json': {schema: getModelSchemaRef(Incedent)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Incedent, {
            title: 'NewIncedent',
            exclude: ['externalId'],
          }),
        },
      },
    })
    incedent: Omit<Incedent, 'externalId'>,
  ): Promise<Incedent> {
    return this.incedentRepository.create(incedent);
  }

  @get('/incedents/count', {
    responses: {
      '200': {
        description: 'Incedent model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Incedent)) where?: Where<Incedent>,
  ): Promise<Count> {
    return this.incedentRepository.count(where);
  }

  @get('/incedents', {
    responses: {
      '200': {
        description: 'Array of Incedent model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Incedent)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Incedent)) filter?: Filter<Incedent>,
  ): Promise<Incedent[]> {
    return this.incedentRepository.find(filter);
  }

  @patch('/incedents', {
    responses: {
      '200': {
        description: 'Incedent PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Incedent, {partial: true}),
        },
      },
    })
    incedent: Incedent,
    @param.query.object('where', getWhereSchemaFor(Incedent)) where?: Where<Incedent>,
  ): Promise<Count> {
    return this.incedentRepository.updateAll(incedent, where);
  }

  @get('/incedents/{id}', {
    responses: {
      '200': {
        description: 'Incedent model instance',
        content: {'application/json': {schema: getModelSchemaRef(Incedent)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Incedent> {
    return this.incedentRepository.findById(id);
  }

  @patch('/incedents/{id}', {
    responses: {
      '204': {
        description: 'Incedent PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Incedent, {partial: true}),
        },
      },
    })
    incedent: Incedent,
  ): Promise<void> {
    await this.incedentRepository.updateById(id, incedent);
  }

  @put('/incedents/{id}', {
    responses: {
      '204': {
        description: 'Incedent PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() incedent: Incedent,
  ): Promise<void> {
    await this.incedentRepository.replaceById(id, incedent);
  }

  @del('/incedents/{id}', {
    responses: {
      '204': {
        description: 'Incedent DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.incedentRepository.deleteById(id);
  }
}
