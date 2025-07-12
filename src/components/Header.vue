<template>
    <header class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <div class="text-xl font-bold">My App</div>
                <div class="flex space-x-4">
                    <router-link to="/"
                        class="text-gray-700 hover:text-gray-900 transition-colors duration-200">Home</router-link>
                    <router-link to="/about"
                        class="text-gray-700 hover:text-gray-900 transition-colors duration-200">About</router-link>
                    <router-link to="/contact"
                        class="text-gray-700 hover:text-gray-900 transition-colors duration-200">Contact</router-link>
                </div>
            </div>
        </div>
    </header>
</template>