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
    { id: "todo", title: "TO DO", color: "bg-gray-200 text-gray-700" },
    { id: "progress", title: "IN PROGRESS", color: "bg-blue-100 text-blue-700" },
    { id: "review", title: "REVIEW (PARTNER)", color: "bg-orange-100 text-orange-700" },
    { id: "done", title: "DONE", color: "bg-green-100 text-green-700" },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-b border-gray-200 bg-white px-6 -mx-6 -mt-6 rounded-t-2xl shadow-sm mb-6 z-10">
        <div>
          <h2 className="text-xl font-bold text-brand-dark">Pekerjaan (Tasks)</h2>
          <p className="text-sm text-gray-500">Board view ala ClickUp untuk pantau progress tax compliance & audit.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 p-1 rounded-lg flex items-center">
            <button 
              onClick={() => setView('board')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${view === 'board' ? 'bg-white shadow-sm text-brand-dark' : 'text-gray-500 hover:text-brand-dark'}`}
            >
              Board
            </button>
            <button 
              onClick={() => setView('list')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${view === 'list' ? 'bg-white shadow-sm text-brand-dark' : 'text-gray-500 hover:text-brand-dark'}`}
            >
              List
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-brand-blue-dark transition-colors text-sm font-semibold shadow-sm">
            <Plus size={16} /> New Task
          </button>
        </div>
      </div>

      {/* Filters bar */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search tasks or clients..." 
            className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* Kanban Board */}
      {view === 'board' && (
        <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
          {columns.map(col => (
            <div key={col.id} className="flex-none w-80 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wider ${col.color}`}>
                    {col.title}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">
                    {tasks.filter(t => t.status === col.id).length}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <div className="flex-1 min-h-[200px] flex flex-col gap-3">
                {tasks.filter(t => t.status === col.id).map(task => (
                  <div key={task.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-grab group">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        task.priority === 'High' ? 'bg-red-50 text-red-600' :
                        task.priority === 'Medium' ? 'bg-orange-50 text-orange-600' :
                        'bg-blue-50 text-blue-600'
                      }`}>
                        {task.priority}
                      </span>
                      <MoreHorizontal size={16} className="text-gray-300 group-hover:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="font-semibold text-brand-dark text-sm mb-1 leading-snug">{task.title}</h4>
                    <p className="text-xs text-brand-blue font-medium mb-3 truncate">{task.projectName}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-brand-silver flex items-center justify-center text-[10px] font-bold text-brand-dark border border-white shadow-sm" title={task.assigneeName}>
                          {task.assigneeName.charAt(0)}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                        <Calendar size={12} />
                        {task.dueDate || 'No date'}
                      </div>
                    </div>
                  </div>
                ))}

                <button className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed border-gray-200 text-gray-500 hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 transition-all text-sm font-medium">
                  <Plus size={16} /> Add Task
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {view === 'list' && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="px-6 py-4 font-semibold">Nama Pekerjaan</th>
                <th className="px-6 py-4 font-semibold">Project</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Assignee</th>
                <th className="px-6 py-4 font-semibold">Due Date</th>
                <th className="px-6 py-4 font-semibold">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-brand-dark">{task.title}</td>
                  <td className="px-6 py-4 text-brand-blue text-sm">{task.projectName}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-md ${columns.find(c => c.id === task.status)?.color}`}>
                      {columns.find(c => c.id === task.status)?.title}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-silver flex items-center justify-center text-[10px] font-bold text-brand-dark border border-white shadow-sm">
                        {task.assigneeName.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-600">{task.assigneeName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 flex items-center gap-1.5">
                    <Calendar size={14} className="text-gray-400" /> {task.dueDate || 'No date'}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        task.priority === 'High' ? 'bg-red-50 text-red-600' :
                        task.priority === 'Medium' ? 'bg-orange-50 text-orange-600' :
                        'bg-blue-50 text-blue-600'
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
