<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { HomeIcon, InformationCircleIcon } from '@heroicons/vue/24/outline'

const navItems = [
  { name: 'Home', to: '/', icon: HomeIcon },
  { name: 'About', to: '/about', icon: InformationCircleIcon },
]
</script>

<template>
  <div class="min-h-screen text-emerald-50">
    <div class="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 lg:px-10">
      <header class="rounded-[2rem] border border-white/10 bg-white/6 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur md:px-6">
        <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/12 ring-1 ring-inset ring-emerald-300/20">
              <img alt="Vue logo" class="h-8 w-8" src="@/assets/logo.svg" />
            </div>

            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-200/65">
                Cloudflare + Vue
              </p>
              <h1 class="text-xl font-semibold text-white md:text-2xl">Mermaid Control Room</h1>
            </div>
          </div>

          <nav class="flex flex-wrap items-center gap-2">
            <RouterLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-emerald-100/80 hover:border-emerald-300/35 hover:bg-emerald-300/10 hover:text-white"
              active-class="border-emerald-300/45 bg-emerald-300/15 text-white"
            >
              <component :is="item.icon" class="h-4 w-4 text-emerald-200/80 group-hover:text-emerald-100" />
              <span>{{ item.name }}</span>
            </RouterLink>
          </nav>
        </div>
      </header>

      <main class="flex-1 py-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>
