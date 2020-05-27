<template>
  <div class="background-canvas-container">
    <canvas
      ref="background-canvas"
      class="background-canvas"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      provider: {
        context: null
      },
      width: null,
      height: null,
      particles: [],
    }
  },
  provide () {
    return {
      provider: this.provider
    }
  },
  mounted () {
    this.provider.context = this.$refs['background-canvas'].getContext('2d');
    this.width = window.innerWidth;
    this.height=  window.innerHeight;

    this.$refs['background-canvas'].width = this.width;
    this.$refs['background-canvas'].height = this.height;
    this.provider.context.strokeStyle = 'rgba(174,194,224,0.5)';
    this.provider.context.lineWidth = 1;
    this.provider.context.lineCrap = 'round';

    const maxParts = 100;
    for (let i = 0; i < maxParts; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        length: Math.random() * 1,
        xspeed: Math.random() * 10 + 5,
        yspeed: Math.random() * 10 + 10,
      });
    }

    setInterval(this.draw, 30);
  },
  methods: {
    move: function() {
      for (let i = 0; i < this.particles.length; i++) {
        const particle = this.particles[i];
        particle.x += particle.xspeed;
        particle.y += particle.yspeed;

        if (particle.x > this.width || particle.y > this.height) {
          particle.x = Math.random() * this.width;
          particle.y = - 20;
        }
      }
    },
    draw: function() {
      this.provider.context.clearRect(0, 0, this.width, this.height);

      for (let i = 0; i < this.particles.length; i++) {
        const particle = this.particles[i];
        this.provider.context.beginPath();
        this.provider.context.moveTo(particle.x, particle.y);
        this.provider.context.lineTo(particle.x + particle.length * particle.xspeed, particle.y + particle.length * particle.yspeed);
        this.provider.context.stroke();
      }
      this.move();
    },
  },
}
</script>

<style lang="scss" scoped>
.background-canvas {
  background-color: #121212;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
