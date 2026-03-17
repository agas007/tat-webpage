import { prisma } from "@/lib/db";
import TasksBoard from "@/components/dashboard/TasksBoard";

export default async function TasksPage() {
  const dbTasks = await prisma.task.findMany({
    include: {
      assignee: true,
      project: true,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });

  const formattedTasks = dbTasks.map(task => ({
    id: task.id,
    title: task.title,
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate ? new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' }).format(task.dueDate) : null,
    assigneeName: task.assignee?.name || "Unassigned",
    projectName: task.project.name,
  }));

  return <TasksBoard initialTasks={formattedTasks} />;
}
