<template lang="pug">
	.card-movie-details 
		.card-movie-detail-content
			img(:src="poster" class="card-movie-poster")
			.movie-info
				a(class="close-modal" @click="onClose") X
				h2 {{ title }}
				p.description 
					| {{ description }}
				h3 Detail Info
				.detail-info-container
					ul.detail-info-label
						li Year:
						li Release date: 
						li Duration:
						li Genre:
						li Director:
						li Box office:
					ul.detail-info-data
						li {{ year }}
						li {{ released }}
						li {{ duration }}
						li {{ gender }}
						li {{ director }}
						li {{ boxOffice }}
</template>

<script>
export default {
	name: 'movie-card-detail',
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
		},
		released: {
			type: String
		},
		year: {
			type: String
		},
		boxOffice: {
			type: String
		},
		duration: {
			type: String
		},
		director: {
			type: String
		}
	},
	methods: {
		onClose () {
			this.$emit('close-modal', this.id)
		}
	}

}
</script>

<style lang="scss">
@import "../styles/base";
.card-movie-details {
  max-width: 1000px;
  position: fixed;
  top: 220px;
  left: calc(50% - 500px);
  z-index: 5;
  
  &:after {
    content: '';
    background: rgba(0,0,0, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -2;
  }
  
  .card-movie-detail-content {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    
    
    
    @include breakpoint(phablet) {
      flex-direction: column;
    }
    
    .card-movie-poster {
      width: 30%;
      
      @include breakpoint(phablet) {
        width: 100%;
        border-radius: 10px 10px 0 0;
        margin-bottom: 20px;
      }
    } 

    .movie-info {
      padding: 40px;
      width: 60%;
      @include breakpoint(phablet) {
        width: 100%;
        padding: 20px;
      }

      .close-modal {
        font-weight: bold;
        font-family: $font-alternative;
        display: block;
        cursor: pointer;
        padding: 10px; 
        background: #12A2F2;
        color: #fff;
        border-radius: 8px;
        box-shadow: 1px 1px 6px rgba(0,0,0,.8);
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }

    h2 {
      text-align: center;
      text-transform: uppercase;
      font-size: 2rem;
      margin-bottom: 20px;
    }

    h3 {
      font-family: $font-alternative;
      font-size: 18px;
      text-align: center;
      margin: 35px 0 5px;
      background: #12A2F2;
      color: #fff;
      border-radius: 8px;
      box-shadow: 1px 1px 6px rgba(0,0,0,.8);
      padding: 10px;
    }

    .detail-info-container {
      font-family: $font-alternative; 
      display:flex;
      align-items: center;
      justify-content: center;
      
      ul {
        margin: 0 3px;
        width: 50%;
        
        li {
          margin: 8px 0;  
        }
      }

      .detail-info-label {
        font-weight: 700;
        text-align: right;
      }

      .detail-info-data {
        li {
          @include breakpoint(phablet) {
            white-space:nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          } 
        }
        
      }
    }

    .description {
      line-height: 150%;
      font-size: 18px;
      
      @include breakpoint(phablet) {
        line-height: 120%;
      }
    }
  }
}
</style>