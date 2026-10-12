import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
import { todoTasks } from '../test-data/todoData';

todoTasks.forEach((data) => {

test(`Add ${data.task}`, async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    
    await todoPage.inputTodoTask(data.task);
    await todoPage.todoInput.press('Enter');

    await expect(
         page.getByText(data.expectedText, { exact: true })
    ).toBeVisible();
});
});