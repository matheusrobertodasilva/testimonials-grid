<template>
    <article class="mx-5 lg:mx-0 my-5 lg:my-0 p-8 rounded-lg shadow-xl">
        <div class="flex items-center mb-5">
            <img 
            class="rounded-full w-[10vw] lg:w-[3vw]"
            :class="borda"
            :src="imagem" 
            :alt="alt">
            <div class="ml-5">
                <h2
                class="font-semibold"
                :class="[nome == 'Jeanette Harmon' || nome == 'Kira Whittle' ? 'text-Very-dark-grayish-blue' : 'text-White']"
                >{{ nome }}</h2>
                <p
                class="text-Light-gray "
                >{{ subtexto }}</p>
            </div>
        </div>
        <h2 
        class="text-lg font-bold mb-5"
        :class="[nome == 'Jeanette Harmon' || nome == 'Kira Whittle' ? 'text-Very-dark-grayish-blue' : 'text-White']"
        >{{ titulo }}</h2>
        <p 
        :class="[[nome == 'Jeanette Harmon' || nome == 'Kira Whittle' ? 'text-Very-dark-grayish-blue' : 'text-White']]"
        >{{ texto }}</p>
    </article>
</template>

<script>
    export default {
        props:[
            "imagem",
            "nome",
            "subtexto",
            "alt",
            "estilo",
            "borda",
            "titulo",
            "texto"

        ]
    }
</script>