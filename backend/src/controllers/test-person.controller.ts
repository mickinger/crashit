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
import {TestPerson} from '../models';
import {TestPersonRepository} from '../repositories';

export class TestPersonController {
  constructor(
    @repository(TestPersonRepository)
    public testPersonRepository : TestPersonRepository,
  ) {}

  @post('/test-people', {
    responses: {
      '200': {
        description: 'TestPerson model instance',
        content: {'application/json': {schema: getModelSchemaRef(TestPerson)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TestPerson, {
            title: 'NewTestPerson',
            
          }),
        },
      },
    })
    testPerson: TestPerson,
  ): Promise<TestPerson> {
    return this.testPersonRepository.create(testPerson);
  }

  @get('/test-people/count', {
    responses: {
      '200': {
        description: 'TestPerson model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(TestPerson)) where?: Where<TestPerson>,
  ): Promise<Count> {
    return this.testPersonRepository.count(where);
  }

  @get('/test-people', {
    responses: {
      '200': {
        description: 'Array of TestPerson model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TestPerson)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(TestPerson)) filter?: Filter<TestPerson>,
  ): Promise<TestPerson[]> {
    return this.testPersonRepository.find(filter);
  }

  @patch('/test-people', {
    responses: {
      '200': {
        description: 'TestPerson PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TestPerson, {partial: true}),
        },
      },
    })
    testPerson: TestPerson,
    @param.query.object('where', getWhereSchemaFor(TestPerson)) where?: Where<TestPerson>,
  ): Promise<Count> {
    return this.testPersonRepository.updateAll(testPerson, where);
  }

  @get('/test-people/{id}', {
    responses: {
      '200': {
        description: 'TestPerson model instance',
        content: {'application/json': {schema: getModelSchemaRef(TestPerson)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<TestPerson> {
    return this.testPersonRepository.findById(id);
  }

  @patch('/test-people/{id}', {
    responses: {
      '204': {
        description: 'TestPerson PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TestPerson, {partial: true}),
        },
      },
    })
    testPerson: TestPerson,
  ): Promise<void> {
    await this.testPersonRepository.updateById(id, testPerson);
  }

  @put('/test-people/{id}', {
    responses: {
      '204': {
        description: 'TestPerson PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() testPerson: TestPerson,
  ): Promise<void> {
    await this.testPersonRepository.replaceById(id, testPerson);
  }

  @del('/test-people/{id}', {
    responses: {
      '204': {
        description: 'TestPerson DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.testPersonRepository.deleteById(id);
  }
}
