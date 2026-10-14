import { test, expect } from '@playwright/test';

test('Get a todo', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.userId).toBe(1);
  expect(responseBody.id).toBe(1);
  expect(responseBody.completed).toBe(false);
});

test('Create a todo', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/todos',
    {
      data: {
        title: 'learn playwright',
        userId: 1,
        completed: false
      }
    }
  );

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  console.log(responseBody);

  expect(responseBody.title).toBe('learn playwright');
  expect(responseBody.userId).toBe(1);
  expect(responseBody.completed).toBe(false);
});

test('Update a partial todo', async ({ request }) => {
  const response = await request.patch(
    'https://jsonplaceholder.typicode.com/todos/1',
    {
      data:{
        completed: true
      }
    }
  );

  expect(response.status()).toBe(200);

  const responnseBody = await response.json();

  expect(responnseBody.completed).toBe(true);       
  });

test('Update a full todo', async ({ request }) => {
  const response = await request.put(
    'https://jsonplaceholder.typicode.com/todos/1',
    {
      data: {
        title: 'learn typescript',
        userId: 1,
        completed: true,
        id: 1
      }
    }
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.title).toBe('learn typescript');
  expect(responseBody.userId).toBe(1);
  expect(responseBody.completed).toBe(true);
  expect(responseBody.id).toBe(1);
});

test('Delete a todo', async ({ request }) => {
  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  expect(response.status()).toBe(200);
});