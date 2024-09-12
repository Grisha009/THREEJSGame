import * as THREE from 'three';

export class App{
    constructor(){
        this.initWindow();
        this.initRenderer();
        this.initCamera();
        this.initScene();

        //Test code
        this.cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
            color:  0xFF0000,
            // metalness: 1,
        }));

        this.scene.add(this.cube);

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
        this.PerspectiveCamera.position.set(5, 5, 5);
        this.PerspectiveCamera.lookAt(new THREE.Vector3(0, 0, 0));
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
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    

    }

}