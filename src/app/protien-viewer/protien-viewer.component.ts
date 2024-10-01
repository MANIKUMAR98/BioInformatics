import { AfterViewInit, Component } from '@angular/core';
declare var PDBeMolstarPlugin: any; 

@Component({
  selector: 'app-protien-viewer',
  templateUrl: './protien-viewer.component.html',
  styleUrl: './protien-viewer.component.scss'
})
export class ProtienViewerComponent implements AfterViewInit {
  ngAfterViewInit() {

    if (typeof PDBeMolstarPlugin !== 'undefined') {
        // Create Molstar plugin instance
      const viewerInstance = new PDBeMolstarPlugin();

    // Set options
    const options = {
      customData: {
        url: 'https://alphafold.ebi.ac.uk/files/AF-O15552-F1-model_v1.cif',
        format: 'cif',
      },
      alphafoldView: true,
      bgColor: { r: 255, g: 255, b: 255 },
      hideCanvasControls: [
        'selection',
        'animation',
        'controlToggle',
        'controlInfo',
      ],
      sequencePanel: true,
      landscape: true,
    };

    // Get element from HTML/Template to place the viewer
    const viewerContainer = document.getElementById('myViewer');

    // Call render method to display the 3D view
    viewerInstance.render(viewerContainer, options);
  }
    }
}