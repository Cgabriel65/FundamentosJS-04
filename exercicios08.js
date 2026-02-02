// ============= Módulo 02 – Fundamentos JavaScript – Aula 04 ============= 

const inventario = [
{ id: 1, nome: "Teclado Mecânico RGB", preco: 85, categoria: ["Informática", "Periféricos"], emStock: true },
{ id: 2, nome: "Frigideira a Ar (Air Fryer)", preco: 110, categoria: ["Eletrodomésticos", "Cozinha"], emStock: true },
{ id: 3, nome: "Cadeira de Escritório Ergonómica", preco: 180, categoria: ["Escritório", "Mobiliário"], emStock: false },
{ id: 4, nome: "Ecrã Curvo 27' 144Hz", preco: 250, categoria: ["Informática", "Ecrãs"], emStock: true },
{ id: 5, nome: "Máquina de Café de Cápsulas", preco: 75, categoria: ["Eletrodomésticos", "Cozinha"], emStock: true },
{ id: 6, nome: "Caderno Inteligente A5", preco: 30, categoria: ["Escritório", "Papelaria"], emStock: true },
{ id: 7, nome: "Trotinete Elétrica", preco: 450, categoria: ["Lazer", "Mobilidade"], emStock: false },
{ id: 8, nome: "Rato Sem Fios Vertical", preco: 55, categoria: ["Informática", "Periféricos"], emStock: true }
];


//1 - filter para achar produtos em stock;
const inventarioStock = inventario.filter(item => item.emStock === true);
console.log(inventarioStock);