/**
 * ! Patrón Composite
 * Es un patrón de diseño estructural que permite componer objetos
 * en estructuras de árbol para representar jerarquías.
 *
 * El patrón permite a los clientes tratar de manera uniforme a los objetos
 * individuales y a sus composiciones.
 *
 * * Es útil cuando necesitas tratar a los objetos individuales
 * * y a sus composiciones de manera uniforme, y la estructura
 * * de los objetos forma una jerarquía en árbol.
 *
 * https://refactoring.guru/es/design-patterns/composite
 *
 */

interface FileSystemComponent {
  showDetails(indent: string): void;
}

class File implements FileSystemComponent {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  showDetails(indent: string = ""): void {
    console.log(`${indent}📄 ${this.name}`);
  }
}

class Directory implements FileSystemComponent {
  private name: string;
  private children: FileSystemComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addChild(child: FileSystemComponent): void {
    this.children.push(child);
  }

  showDetails(indent: string = ""): void {
    console.log(`${indent}📂 ${this.name}`);
    this.children.forEach((child) => child.showDetails(`${indent}  `));
  }
}

function main() {
  const file1 = new File("file1.txt");
  const file2 = new File("file2.txt");
  const photo1 = new File("photo.jpg");
  const video1 = new File("video.mp4");
  const googleInstaller = new File("GoogleInstaller.exe");
  const documentPdf = new File("document.pdf");
  const documentDocx = new File("document.docx");
  const islandPhoto = new File("island.jpg");
  const mountainPhoto = new File("mountain.jpg");

  const vacationPhotos = new Directory("VacationPhotos");
  vacationPhotos.addChild(islandPhoto);
  vacationPhotos.addChild(mountainPhoto);

  const myPhotos = new Directory("MyPhotos");
  myPhotos.addChild(photo1);
  myPhotos.addChild(video1);
  myPhotos.addChild(vacationPhotos);

  const myDownloads = new Directory("MyDownloads");
  myDownloads.addChild(file1);
  myDownloads.addChild(file2);
  myDownloads.addChild(googleInstaller);

  const rootDirectory = new Directory("RootDirectory");
  rootDirectory.addChild(myDownloads);
  rootDirectory.addChild(myPhotos);
  rootDirectory.addChild(documentPdf);
  rootDirectory.addChild(documentDocx);

  console.log("Detalles del directorio raíz:");
  rootDirectory.showDetails();
}

main();
