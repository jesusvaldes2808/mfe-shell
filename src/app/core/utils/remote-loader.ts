import { loadRemoteModule } from "@angular-architects/native-federation";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-failed-load-mf',
  template: `
    <div class="container">
      <p class="title">Error al cargar el modulo</p>
      <p>Se ha presentado un problema al momento de intentar cargar el mf</p>
    </div>
  `,
  styles: `
    .container {
      border: solid 1px red;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      width: 250px;
      text-align: center; 
      padding: 10px;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-style: normal;
    }
    
    .title {
      color: red;
      margin-bottom: 10px;
      font-size: 18px
    }
  `
})
export class FailedToLoadMf {}

export function loadRoute(remoteName: string, exposedName: string) {
  return () => 
    loadRemoteModule(remoteName, exposedName)
    .then((m) => m.routes)
    .catch((err) => {
      console.error(`❌ Error al cargar las rutas del MFE '${remoteName}':`, err);
      return [{ path: '', component: FailedToLoadMf }];
    });
}

export function loadComponent(remoteName: string, exposedName: string, componentName: string) {
  return () => 
    loadRemoteModule(remoteName, exposedName)
    .then((c) => c[componentName])
    .catch((err) => {
      console.error(`❌ Error al cargar el componente del MFE '${remoteName}':`, err);
      return FailedToLoadMf;
    });
}
