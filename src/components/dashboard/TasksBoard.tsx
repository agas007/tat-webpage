"use client";

import { useState } from "react";
import { Plus, MoreHorizontal, Search, Filter, Calendar } from "lucide-react";

interface Task {
  id: string;
  title: string;
  status: string;
  priority: string;
  dueDate: string | null;
  assigneeName: string;
  projectName: string;
}

interface TasksBoardProps {
  initialTasks: Task[];
}

export default function TasksBoard({ initialTasks }: TasksBoardProps) {
  const [view, setView] = useState<'board' | 'list'>('board');
  const [tasks] = useState<Task[]>(initialTasks);

  const columns = [
    { id: "todo", title: "TO DO", color: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300" },
    { id: "progress", title: "IN PROGRESS", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
    { id: "review", title: "REVIEW (PARTNER)", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300" },
    { id: "done", title: "DONE", color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-b border-gray-200 dark:border-gray-800 bg-background dark:bg-card px-6 -mx-6 -mt-6 rounded-t-2xl shadow-sm mb-6 z-10 transition-colors">
        <div>
          <h2 className="text-xl font-bold text-brand-dark dark:text-white">Pekerjaan (Tasks)</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Board view ala ClickUp untuk pantau progress tax compliance & audit.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-muted p-1 rounded-lg flex items-center transition-colors">
            <button 
              onClick={() => setView('board')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'board' ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Board
            </button>
            <button 
              onClick={() => setView('list')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'list' ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              List
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-xl hover:bg-brand-blue-dark transition-colors text-sm font-semibold shadow-md active:scale-95">
            <Plus size={16} /> New Task
          </button>
        </div>
      </div>

      {/* Filters bar */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
          <input 
            type="text" 
            placeholder="Search tasks or clients..." 
            className="w-full pl-9 pr-4 py-2 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border text-foreground rounded-xl hover:bg-muted transition-colors text-sm font-medium shadow-sm">
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* Kanban Board */}
      {view === 'board' && (
        <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
          {columns.map(col => (
            <div key={col.id} className="flex-none w-80 flex flex-col">
              <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase ${col.color}`}>
                    {col.title}
                  </span>
                  <span className="text-gray-400 dark:text-gray-500 text-sm font-bold">
                    {tasks.filter(t => t.status === col.id).length}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <div className="flex-1 min-h-[200px] flex flex-col gap-3">
                {tasks.filter(t => t.status === col.id).map(task => (
                  <div key={task.id} className="bg-card p-4 rounded-2xl border border-border shadow-sm hover:shadow-md dark:shadow-none hover:border-brand-blue/30 transition-all cursor-grab group active:cursor-grabbing">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        task.priority === 'High' ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' :
                        task.priority === 'Medium' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' :
                        'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      }`}>
                        {task.priority}
                      </span>
                      <MoreHorizontal size={16} className="text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="font-bold text-brand-dark dark:text-gray-100 text-sm mb-1 leading-snug">{task.title}</h4>
                    <p className="text-xs text-brand-blue dark:text-brand-blue-light font-bold mb-3 truncate">{task.projectName}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50 dark:border-gray-700/50">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-brand-silver dark:bg-gray-700 flex items-center justify-center text-[10px] font-bold text-brand-dark dark:text-white border border-white dark:border-gray-800 shadow-sm" title={task.assigneeName}>
                          {task.assigneeName.charAt(0)}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-tight">
                        <Calendar size={12} className="opacity-70" />
                        {task.dueDate || 'No date'}
                      </div>
                    </div>
                  </div>
                ))}

                <button className="flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:border-brand-blue dark:hover:border-brand-blue-light hover:text-brand-blue dark:hover:text-brand-blue-light hover:bg-brand-blue/5 transition-all text-sm font-bold">
                  <Plus size={16} /> Tambah Task
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {view === 'list' && (
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden flex-1 transition-colors">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted text-muted-foreground text-[10px] font-bold uppercase tracking-widest border-b border-border">
                <th className="px-6 py-4">Nama Pekerjaan</th>
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4">Assignee</th>
                <th className="px-6 py-4">Due Date</th>
                <th className="px-6 py-4">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y border-border">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-brand-dark dark:text-gray-100">{task.title}</td>
                  <td className="px-6 py-4 text-brand-blue dark:text-brand-blue-light text-sm font-semibold">{task.projectName}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded-md tracking-wider ${columns.find(c => c.id === task.status)?.color}`}>
                      {columns.find(c => c.id === task.status)?.title}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-silver dark:bg-gray-700 flex items-center justify-center text-[10px] font-bold text-brand-dark dark:text-white border border-white dark:border-gray-800 shadow-sm">
                        {task.assigneeName.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{task.assigneeName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 font-medium">
                    <Calendar size={14} className="text-gray-400 dark:text-gray-600" /> {task.dueDate || 'No date'}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        task.priority === 'High' ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' :
                        task.priority === 'Medium' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' :
                        'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      }`}>
                        {task.priority}
                      </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}
