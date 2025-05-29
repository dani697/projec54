// Tog hjälp av AI för att göra schema, __test__ och
const { generateTasks } = require('../src/index.gs');

test('generateTasks returns 5 tasks with correct structure', () => {
  const result = generateTasks("Acquire-High-Paying-Clients");
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(5);
  expect(result[0]).toEqual(
    expect.objectContaining({
      taskId: expect.stringMatching(/^OBJ-\d{4}-999-T0\d$/),
      title: "Acquire High Paying Clients",
      dueDate: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/)
    })
  );
});
