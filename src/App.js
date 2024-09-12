import * as THREE from 'three';

export class App{
    constructor(){
        this.initWindow();
        this.initRenderer();
        this.initCamera();
        this.initScene();

        this.previousRAF = null;
        this.raf();
    }

    initWindow(){
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
    }

    initRenderer(){
        this.canvas = document.getElementById("canvas");
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
        this.renderer.setSize(this.windowWidth, this.windowHeight);
    }

    initCamera(){
        this.PerspectiveCamera = new THREE.PerspectiveCamera(75, this.windowWidth / this.windowHeight, 5, 100);
    }

    initScene(){
        this.scene = new THREE.Scene()
    }

    raf(){
        requestAnimationFrame((t) =>{
            if (this.previousRAF === null){
                this.previousRAF = t;
            }

            this.step(t - this.previousRAF);

            this.renderer.autoClear = true;
            this.renderer.render(this.scene, this.PerspectiveCamera);
            this.renderer.autoClear = false;

            this.previousRAF = t;
            this.raf();
        })
    }

    step(timeElapsed){
        const timeElapsedS = timeElapsed * 0.001;
    

    }

}