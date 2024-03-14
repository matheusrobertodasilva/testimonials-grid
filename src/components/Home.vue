<template>
    <main>
        <section class="my-20 lg:mx-5 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-8 ">
            <Testimonial
            v-for="pessoa in testemunhos"
            :class="pessoa.estilo"
            :imagem="pessoa.imagem"
            :nome="pessoa.nome"
            :subtexto="pessoa.subtexto"
            alt="Imagem de perfil"
            :borda="pessoa.borda"
            :titulo="pessoa.titulo"
            :texto="pessoa.texto"
            />
        </section>
    </main>
</template>

<script>
    import Testimonial from './Testimonial.vue'

    export default{
        name:'Home',
        components:{
            Testimonial
        },
        data(){
            return{
                testemunhos:[
                    {
                        nome: 'Daniel Clifford',
                        verificacao:'Verified Graduate',
                        titulo:'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
                        texto:'“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”',
                        imagem:'/assets/images/image-daniel.jpg',
                        estilo:"col-span-2 row-span-1 bg-Moderate-violet bg-[url('assets/images/bg-pattern-quotation.svg')] bg-no-repeat bg-[right_1rem_top] lg:bg-[right_6rem_top] ",
                        borda:'border-2 border-violet-400'
                    },
                    {
                        nome: 'Jonathan Walters',
                        verificacao:'Verified Graduate',
                        titulo:'The team was very supportive and kept me motivated',
                        texto:'“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”',
                        imagem:'/assets/images/image-jonathan.jpg',
                        estilo:'bg-Very-dark-grayish-blue ',
                        borda:''
                    },
                    {
                        nome: 'Jeanette Harmon',
                        verificacao:'Verified Graduate',
                        titulo:'An overall wonderful and rewarding experience',
                        texto:'“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”',
                        imagem:'/assets/images/image-jeanette.jpg',
                        estilo:'bg-White',
                        borda:''
                    },
                    {
                        nome: 'Patrick Abrams',
                        verificacao:'Verified Graduate',
                        titulo:'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
                        texto:'“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”',
                        imagem:'/assets/images/image-patrick.jpg',
                        estilo:'col-span-2 bg-Very-dark-blackish-blue',
                        borda:'border-2 border-Moderate-violet'
                    },
                    {
                        nome: 'Kira Whittle',
                        verificacao:'Verified Graduate',
                        titulo:'Such a life-changing experience. Highly recommended!',
                        texto:'“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”',
                        imagem:'/assets/images/image-kira.jpg',
                        estilo:'bg-White col-start-4 row-start-1 row-end-3',
                        borda:''
                    }
                ]
            }
        }
    }
</script>