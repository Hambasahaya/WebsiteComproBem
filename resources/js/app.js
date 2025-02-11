import './bootstrap';
import './bootstrap';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('hero');
  const memberscanvas=document.getElementById('members')
  const canvas2 = document.getElementById('cloudCanvas');
  const textureLoaders = new THREE.TextureLoader();
  const bgTexture = textureLoaders.load('/assets/bg2.png');
  const bgCloud = textureLoaders.load('/assets/bg4.png')
  let renderer, camera,scene= new THREE.Scene(),ambientLight,pointLight;
  if (canvas) {
  scene.background = bgTexture;
   camera = new THREE.PerspectiveCamera(110, window.innerWidth / window.innerHeight, 0.1, 1000);
   renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  const sphereGeometry = new THREE.SphereGeometry(2.8, 64, 64);
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('/assets/globe.png');
  const sphereMaterial = new THREE.MeshPhongMaterial({
    map: texture,
    emissive: 0xffffff,
    emissiveIntensity: 0,
    shininess: 900,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(0, 0.0, 0);
  scene.add(sphere);
  const ringGeometry = new THREE.TorusGeometry(5.2, 0.03, 100, 100);
  const colors = [];
  const totalVertices = ringGeometry.attributes.position.count;
  for (let i = 0; i < totalVertices; i++) {
    const angle = Math.atan2(
      ringGeometry.attributes.position.getY(i),
      ringGeometry.attributes.position.getX(i)
    );
    if (angle > 0) {
      colors.push(1, 0.992, 0.720);
    } else {
      colors.push(0.5, 0, 0.5);
    }
  }
  ringGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const ringMaterial = new THREE.MeshBasicMaterial({ vertexColors: true });
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);
  ring.rotation.x = Math.PI / 1.67;
  ring.rotation.y = Math.PI / -1.1;
  ring.position.set(0, 0.8, 0);
  scene.add(ring);
  ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);
  pointLight = new THREE.PointLight(0xffffff, 1, 0);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({
    size: 0.03,
    vertexColors: true,
    fog: true
  });
  const starCount = 8000;
  const positions = [];
  const starColors = [];
  const color = new THREE.Color();
  for (let i = 0; i < starCount; i++) {
    positions.push((Math.random() - 0.5) * 900);
    positions.push((Math.random() - 0.5) * 900);
    positions.push((Math.random() - 0.5) * 900);
    color.setHSL(Math.random(), 10, 0.8);
    starColors.push(color.r, color.g, color.b);
  }
  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
  const fontLoader = new FontLoader();
  fontLoader.load('/assets/font2.json', (font) => {
    const textGeometryBEM = new TextGeometry('B E M', {
      font: font,
      size: 0.6,
      depth: 0,
    });
    const textMaterialBEM = new THREE.MeshStandardMaterial({
      color: '#000000',
      metalness: 0,
      roughness: 0,
      emissive: '#000000',
      emissiveIntensity: 1,
    });
    const textMeshBEM = new THREE.Mesh(textGeometryBEM, textMaterialBEM);
    textMeshBEM.position.set(2.9, 1.18, 1.2);
    scene.add(textMeshBEM);

    const textGeometryMercu = new TextGeometry('Universitas Mercu Buana', {
      font: font,
      size: 0.25,
      depth: 0,
    });
    const textMaterialMercu = new THREE.MeshStandardMaterial({
      color: '#780C28',
      metalness: 0,
      roughness: 0,
      emissive: '#780C28',
      emissiveIntensity: 1,
    });
    const textMeshMercu = new THREE.Mesh(textGeometryMercu, textMaterialMercu);
    textMeshMercu.position.set(-1.40, -0.54, 6.2);
    scene.add(textMeshMercu);
    const text = 'FASILKOM';
    const letterSpacing = 0.2;
    let currentX = -1.5;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const textGeometryFASILKOM = new TextGeometry(char, {
        font: font,
        size: 0.45,
        depth: 0,
      });
      textGeometryFASILKOM.computeBoundingBox();
      const textMaterialFASILKOM = new THREE.MeshStandardMaterial({
        color: '#F9E400',
        metalness: 0,
        roughness: 0,
        emissive: '#F9E400',
        emissiveIntensity: 4,
      });
      const textMeshFASILKOM = new THREE.Mesh(textGeometryFASILKOM, textMaterialFASILKOM);
      textMeshFASILKOM.position.set(currentX, -0.2, 6.2);
      if (textGeometryFASILKOM.boundingBox) {
        const charWidth = textGeometryFASILKOM.boundingBox.max.x - textGeometryFASILKOM.boundingBox.min.x;
        currentX += charWidth + letterSpacing;
      }
      scene.add(textMeshFASILKOM);
    }
  });
  camera.position.z = 11;
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.screenSpacePanning = false;
  controls.enableZoom  = false; 
  
  function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.01;
    ring.rotation.z += 0.02;
    stars.rotation.y += 0.002;
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
  setTimeout(() => {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/assets/globe3.png');
    const textureMaterial = new THREE.MeshPhongMaterial({
      map: texture,
    });
    sphere.material = textureMaterial;
    function animate2() {
      requestAnimationFrame(animate2);
      ring.rotation.z += 0.02;
      sphere.rotation.y += 0.01;
      controls.update();
      renderer.render(scene, camera);
    }
    animate2();
  }, 10000);
    
  } 
  if(memberscanvas){
      let meshKnot;
      pointLight = new THREE.PointLight(0xffffff, 21, 10);
      pointLight.position.set(0, -105, 95);
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        fog: true
      });
      const starCount = 10000;
      const positions = [];
      const starColors = [];
      const color = new THREE.Color();
      for (let i = 0; i < starCount; i++) {
        positions.push((Math.random() - 0.3) * 900);
        positions.push((Math.random() - 0.3) * 900);
        positions.push((Math.random() - 0.3) * 900);
        color.setHSL(Math.random(), 10, 0.3);
        starColors.push(color.r, color.g, color.b);
      }
      starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
      renderer = new THREE.WebGLRenderer( { canvas:memberscanvas,antialias: true } );
          renderer.setSize( window.innerWidth, window.innerHeight );
          camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 1000 );
          camera.position.set( 0, 5, -1 );
          RectAreaLightUniformsLib.init();
          const rectLight1 = new THREE.RectAreaLight( '#793FDF', 8, 2, 11 );
          rectLight1.position.set( - 3.2, 5, 5 );
          scene.add( rectLight1 );
          const rectLight2 = new THREE.RectAreaLight( '#6499E9', 8, 2, 11 );
          rectLight2.position.set( 0, 5, 5 );
          scene.add( rectLight2 );
          const rectLight3 = new THREE.RectAreaLight( "#FEF9D9", 8, 2, 11 );
          rectLight3.position.set( 3.2, 5, 5 );
          scene.add( rectLight3 );
          scene.add(pointLight);
          scene.add( new RectAreaLightHelper( rectLight1 ) );
          scene.add( new RectAreaLightHelper( rectLight2 ) );
          scene.add( new RectAreaLightHelper( rectLight3 ) );
          const geoFloor = new THREE.BoxGeometry( 20000, 0.1, 2000 );
          const matStdFloor = new THREE.MeshStandardMaterial( { color: 0xbcbcbc, roughness: 0.9, metalness: 1 } );
          const mshStdFloor = new THREE.Mesh( geoFloor, matStdFloor );
          scene.add( mshStdFloor );
          const geoKnot = new THREE.TorusKnotGeometry( 0, 0, 0,0 );
          const matKnot = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0, metalness: 0 } );
          meshKnot = new THREE.Mesh( geoKnot, matKnot );
          meshKnot.position.set( 0, 5, 0 );
          const controls = new OrbitControls( camera, renderer.domElement );
          controls.enableDamping = true; 
          controls.dampingFactor = 0.25;
          controls.enableZoom = false;  
          controls.enablePan = false; 
          controls.enableRotate = false;
          controls.target.copy( meshKnot.position );
          controls.update();
          
          function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            stars.rotation.y += 0.001;
            stars.rotation.x += 0.001;
            stars.rotation.z += 0.001;
            
          }
          animate();
          
  }
  if (canvas2) {
    let ambientLight = new THREE.AmbientLight(0xffffff, 2);
    console.log("Canvas found");
    const scenecloud = new THREE.Scene();
    const cameracloud = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderercloud = new THREE.WebGLRenderer({
      canvas: canvas2,
      antialias: true
    });
  
    renderercloud.setSize(window.innerWidth, window.innerHeight);
  
    const mtlLoader = new MTLLoader();
    let plane = null;
  
    mtlLoader.load('/assets/pesawat.mtl', function (materials) {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load('/assets/pesawat.obj', function (object) {
        object.scale.set(0.03, 0.02, 0.03);
        object.position.set(0, -5, 30);
        object.rotation.y = Math.PI;
        object.rotation.x = Math.PI / 2;
        object.rotation.z = Math.PI / 2;
        plane = object; 
        scenecloud.add(plane);
        renderercloud.render(scenecloud, cameracloud);
      });
    });
  
    scenecloud.background = bgCloud;
    scenecloud.opacity = 0.2;
    scenecloud.add(ambientLight);
  
    let pointLight = new THREE.PointLight(0xffffff, 0, 0);
    pointLight.position.set(5, 5, 5);
    scenecloud.add(pointLight);
  
    const textureLoader = new THREE.TextureLoader();
    const cloudTexture = textureLoader.load('/assets/cloud2.png', () => {
      renderercloud.render(scenecloud, cameracloud);
    });
  
    const cloudMaterial = new THREE.MeshBasicMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 10
    });
  
    scenecloud.traverse((object) => {
      if (object.isMesh && object.material) {
        object.material.opacity = 0.2;
        object.material.transparent = true;
      }
    });
  
    function createCloud() {
      const cloudGroup = new THREE.Group();
      const sphereGeometry2 = new THREE.SphereGeometry(2, 18, 18);
  
      for (let i = 0; i < 30; i++) {
        const cloudMesh = new THREE.Mesh(sphereGeometry2, cloudMaterial);
        cloudMesh.position.set(
          Math.random() * 5 - 2.5,
          Math.random() * 3 - 2.5,
          Math.random() * 2 - 8
        );
        const scale = Math.random() * 2 + 2;
        cloudMesh.scale.set(scale, scale, scale);
        cloudGroup.add(cloudMesh);
      }
      return cloudGroup;
    }
  
    const cloud1 = createCloud();
    const cloud2 = createCloud();
    const cloud3 = createCloud();
    const cloud4 = createCloud();
    const cloud5 = createCloud();
    const cloud6 = createCloud();
  
    cloud1.position.set(-12, 4, 10);
    cloud2.position.set(-1, 3, 10);
    cloud3.position.set(11, 2, 10);
    cloud4.position.set(-8, 1, 10);
    cloud5.position.set(-9, 5, 10);
    cloud6.position.set(5, 6, 10);
  
    scenecloud.add(cloud1);
    scenecloud.add(cloud2);
    scenecloud.add(cloud3);
    scenecloud.add(cloud4);
    scenecloud.add(cloud5);
    scenecloud.add(cloud6);
  
    cameracloud.position.z = 35;
  
    window.addEventListener('resize', () => {
      cameracloud.aspect = window.innerWidth / window.innerHeight;
      cameracloud.updateProjectionMatrix();
      renderercloud.setSize(window.innerWidth, window.innerHeight);
    });
  
    let cameraSpeed = 0.4;
    let resetPositionZ = -200;
    let initialPositionZ = cameracloud.position.z;
  
    function animatecloud(time) {
      requestAnimationFrame(animatecloud);
      if (plane) {
        let easedSpeed = easeInOutQuad(cameraSpeed);
        plane.rotation.y += 0.007;
        plane.position.z -= easedSpeed;
  
        if (plane.position.z < resetPositionZ) {
          plane.position.z = initialPositionZ;
        }
      }
  
      renderercloud.render(scenecloud, cameracloud);
    }
  
    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
  
    animatecloud();
  }
  

  function resizeBackground() {
    const aspect = window.innerWidth / window.innerHeight;
    if (aspect > 1) {
      bgTexture.offset.x = (8 - 2 / aspect) / 2;
      bgTexture.repeat.set(1 / aspect, 1);
    } else {
      bgTexture.offset.y = (8 - aspect) / 2;
      bgTexture.repeat.set(2, aspect);
    }
  }
  
  function initSwipers() {
    let swiperElements = document.querySelectorAll('.mySwiper');
    const observerOptions = {
      root: null, 
      threshold: 0.1
    };
  
    const swiperObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        let element = entry.target;
        if (entry.isIntersecting) {
          if (!element.swiperInstance) {
            element.swiperInstance = new Swiper(element, {
              effect: "coverflow",
              grabCursor: true,
              centeredSlides: true,
              slidesPerView: "auto",
              speed: 1000,
              coverflowEffect: {
                rotate: 20,
                stretch: 10,
                depth: 200,
                modifier: 1,
              },
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
              pagination: {
                el: element.querySelector('.swiper-pagination'),
              },
            });
          } else {
            element.swiperInstance.autoplay.start();
            element.swiperInstance.slideTo(0); 
          }
          if (window.matchMedia("(max-width: 768px)").matches) {
            element.swiperInstance.params.slidesPerView = "1";
            element.swiperInstance.params.coverflowEffect.rotate = 70;
            element.swiperInstance.update();
          } else if (window.matchMedia("(min-width: 769px)").matches) {
            element.swiperInstance.params.slidesPerView = 4;
            element.swiperInstance.params.coverflowEffect.rotate = 20;
            element.swiperInstance.update();
          } else if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
            element.swiperInstance.params.slidesPerView = 3;
            element.swiperInstance.params.coverflowEffect.rotate = 20;
            element.swiperInstance.update();
          }
          
        } else {
          if (element.swiperInstance) {
            element.swiperInstance.autoplay.stop();
          }
        }
      });
    }, observerOptions);
    swiperElements.forEach((element) => {
      swiperObserver.observe(element);
    });
  }
  

initSwipers();
  window.addEventListener('resize', function () {
    resizeBackground()
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

})
