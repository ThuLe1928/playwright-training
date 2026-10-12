import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
import { todoTasks } from '../test-data/todoData';
import { createTodoName } from '../helpers/textHelper';

todoTasks.forEach((task) => {

test(`Add learn ${task}`, async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();

    const generatedTask = createTodoName(task);
    
    await todoPage.inputTodoTask(generatedTask);
    await todoPage.todoInput.press('Enter');

    await expect(
         page.getByText(generatedTask, { exact: true })
    ).toBeVisible();
});
});