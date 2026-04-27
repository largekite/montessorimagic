import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// Detailed view of a single child's progress, skill milestones, and book history

import { auth } from '@clerk/nextjs/server';

export default async function ChildDetailPage() {
  const { userId } = await auth();
  if (!userId) { redirect('/sign-in'); }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Child Detail</h1>
        <p className="text-slate-500">Detailed view of a single child's progress, skill milestones, and book history</p>
      </main>
    </div>
  );
}
