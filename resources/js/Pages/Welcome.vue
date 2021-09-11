<template>
    <min>
        <header>
            <Link href="/send">send</Link>
        </header>
    </min>
</template>

<script>
import { Head, Link } from '@inertiajs/inertia-vue3';

export default {
    name: "Welcome",
    components:{
        Link,
        Head
    }
}

</script>

<style scoped>

</style>
