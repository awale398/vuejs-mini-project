
<script>

    export default {
  
      data() {
  
        return {
  
            image: 'public\joel-drzycimski-b506G3VezPE-unsplash.jpg',
  
            url: 'https://www.vuejs.org/',
  
            stockDetails : [
  
                {
  
                    itemNumber: 1,
  
                    itemName : "plater gold",
  
                    itemPrice : 1300,
  
                    itemQuantity : 30,
  
                    itemImage: 'public\mudassir-zaheer-RbUI-Hc9Hy0-unsplash.jpg'
  
                },
  
                {
  
                    itemNumber: 2,
  
                    itemName : "full pilau",
  
                    itemPrice : 700,
  
                    itemQuantity : 59,
  
                    itemImage: 'public\deepthi-clicks-tUV7SJ3JqB4-unsplash.jpg'
  
                },
                
                                                   
                
                 
  
            ],
  
          }
  
      },
  
      methods() {
  
        // we shall add our functions here
  
      },
      computed(){
  
        //we use this when working with forms
  
      }
  
    }
  
  </script>
  
  <template>
  <v-card>
    class="mx-auto"
    width="1000"
  >
  
  
    <v-carousel>
      <v-carousel-item
        src="./public\amin-ramezani-v5n6WC_elKY-unsplash.jpg"
        cover
      ></v-carousel-item>
    
      <v-carousel-item
        src="./public\deepthi-clicks-_VcbQWaBZvE-unsplash.jpg"
        cover
      ></v-carousel-item>
    
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-card>
  
  
  <v-card align="center">
    <v-card-item>
     <v-card-title>WELCOME TO RESTO MANAGEMENT RESTURANT</v-card-title>
  
     <v-card-subtitle>WE RESPECT YOU AND YOUR DESIRES</v-card-subtitle>
   </v-card-item>
  
   <v-card-text>
    Welcome to "Flavors of the World," your ultimate culinary destination right at your fingertips! Discover a virtual
    dining experience like no other, where gourmet meals from around the globe await your selection. 
    From sizzling street food to decadent desserts, our online restaurant offers a diverse menu crafted with passion 
    and expertise. Whether you're craving comforting classics or adventurous flavors, our chefs bring the world's 
    finest cuisines straight to your doorstep. Embrace convenience without compromising on taste with
     "Flavors of the World" – where every bite tells a delicious story.

    
   </v-card-text>
    </v-card>
  <v-divider></v-divider>
        <v-divider></v-divider>
        <v-divider></v-divider>
        <h3 class="text-center">commentaries of our visitors</h3>
        <v-divider></v-divider>
  <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="FROM MINIAPOLIS AMERICA"
        text="since i came to kenya i have been looking for a brilliant hottel as this one, Resto management is the best"
        title="SIHAM ADEN SIAD"
      ></v-card>
  
      <div class="text-center text-caption">feel free</div>
    </v-col>
  
    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          AWALE ADAN SIYAD
        
        </template>
  
        <template v-slot:subtitle>
          FROM NAIROBI KENYA
        </template>
  
        <template v-slot:text>
            since i bacame a wealthy person i have been looking for a place that can hundle my desires 
            Resto management was able to assist me in that, i give it a 5 star
          
        </template>
      </v-card>
  
      <div class="text-center text-caption">RestoManagement your home</div>
    </v-col>
  
    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>SAKINA SHANZU</v-card-title>
  
          <v-card-subtitle>FROM MOMBASSA KENYA</v-card-subtitle>
        </v-card-item>
  
        <v-card-text>
          Since relocating from Mombassa to Nairobi , i was looking for a perfect place to take my boyfriends to. 
          resto management helped me to enjoy my dates, now i can brag that life is more simplified ,
        </v-card-text>
      </v-card>
  
      <div class="text-center text-caption">home of deliciousness</div>
    </v-col>
  </v-row>
      </template>
  
  
  