import axios from 'axios';
import * as request from '../client-request';
import { describe, it, expect } from '@jest/globals';
import { testData } from '../__mocks__/api-request.mocks';

jest.mock('axios');

describe('client - client', () => {
  it('should return client data', async () => {
    axios.mockResolvedValueOnce({
      data: testData
    });

    const result = await request.client();

    expect(result).toEqual(testData);
    expect(axios).toHaveBeenCalledTimes(1);
  });
});
