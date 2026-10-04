import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('Add a new todo task', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    
    await todoPage.inputTodoTask('learn playwright');
    await todoPage.todoInput.press('Enter');

    await expect(
         page.getByText('learn playwright', { exact: true })
    ).toBeVisible();
});