<template lang="pug">
	.card-movie
		.card-movie-hover-actions
			p.category-info {{ gender }}
			a(class="view-details" @click="onViewDetails") view details
		img(:src="poster" class="card-movie-poster")
		.card-movie-info
			h3(class="card-movie-title") {{ title }}
			p.description {{ description }}
</template>

<script>
export default {
	name: 'movie-card',
	props: {
		gender: {
			type: String,
			required: true
		},
		poster: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		id: {
			type: String,
			required: true
		},
		description: {
			type: String
		}
	},
	methods: {
		onViewDetails () {
			this.$emit('view-details', this.id)
		}
	}

}
</script>

<style lang="scss">
@import "../styles/base";
.card-movie {
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    margin: 0 0 6vh 0;
    break-inside: avoid;
    background:#fff;
    border-radius: 10px;
    position: relative;
    
    &:hover{
      .card-movie-hover-actions {
        opacity: 1;
      } 
    }

    .card-movie-hover-actions {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background: rgba(0,0,0, 0.4);
      width: 100%;
      height: 100%;
      padding: 10px;
      border-radius: 10px;
      font-family: $font-alternative;
      text-transform: uppercase;
      letter-spacing: 1px;
      border: solid 4px #12A2F2;
      opacity: 0;
      @include transition (all 300ms);
      
      .category-info {
        color: #fff;
        font-size: 32px;
        text-align: center;
        line-height: 130%;
        font-weight: 700;
      }

      .view-details {
        display: block;
        padding: 15px;
        text-align: center;
        background: #12A2F2;
        color: #fff;
        border-radius: 8px;
        box-shadow: 1px 1px 10px rgba(0,0,0,1);
      }
    }
    
    .card-movie-poster {
      width: calc(100% + 30px);
      border-radius: 10px 10px 0 0;
      margin: -15px -15px 20px -15px;
    }

    .card-movie-title {
      font-size: 1.3rem;
      text-transform: uppercase;
      font-weight: bold;
      margin: 0 0 10px 0;
    }

    .card-movie-info {
      padding: 10px 20px;
      
      .description {
        
      }
    }
 }
</style>