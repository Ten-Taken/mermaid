<template>
  <section class="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,24rem)]">
    <div class="rounded-[2rem] border border-white/10 bg-black/10 p-8 shadow-xl shadow-black/20 backdrop-blur">
      <p class="text-sm font-medium uppercase tracking-[0.3em] text-emerald-200/60">Starter status</p>
      <h2 class="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Tailwind is wired in and ready for the real app UI.
      </h2>
      <p class="mt-4 max-w-2xl text-base leading-7 text-emerald-50/75">
        This starter shell replaces the default Vue welcome content so we can build on a cleaner
        foundation. Router views now inherit a single app frame, and new screens can be styled
        directly with Tailwind utilities.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <span class="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
          Vue 3
        </span>
        <span class="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
          Vue Router
        </span>
        <span class="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
          Pinia
        </span>
        <span class="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
          Tailwind CSS
        </span>
        <span class="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
          Heroicons
        </span>
      </div>
    </div>

    <aside class="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur">
      <h3 class="text-lg font-semibold text-white">Next good moves</h3>
      <ul class="mt-4 space-y-3 text-sm leading-6 text-emerald-50/75">
        <li>Define a small color system and spacing rhythm for the product.</li>
        <li>Replace placeholder route content with actual feature surfaces.</li>
        <li>Move repeated utility patterns into reusable Vue components when they settle.</li>
      </ul>
    </aside>
  </section>
</template>
