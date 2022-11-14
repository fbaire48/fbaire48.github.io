// Inicio: Scroll modificado //
function a()
{
	const b=document.querySelectorAll('a[href^="#"]');
	b.forEach(c=>
	{
		c.addEventListener('click', d);
	});
	function d(event)
	{
		event.preventDefault();
		const e=event.target;
		const f=e.getAttribute('href');
		const g=document.querySelector(f).offsetTop;
		window.scroll
		(
			{
				top:g-60,behavior:'smooth',
			}
		);
	}
}
a()
// Fim: Scroll modificado //
// Inicio: Select de todos os estados e cidades //
const aa=document.querySelector("#select-de-estados");
const bb=async()=>
{
	aa.innerHTML=`<option value="nada">Escolha`;
	const cc=`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`;
	const dd=await fetch(cc).then(response => response.json()).catch(error => false);
	const ee=()=>
	{
		dd.forEach(ff=>
		{
			const {sigla,nome}=ff;
			aa.innerHTML+=`<option value="${sigla}">${nome}</option>`;
		});
	}
	// Inicio: Metodo para garantir performance no mobile (visto que sem o if ou utilizar uma 
	// funcao (em todo o metodo de criacao de selects para as cidades e/ou estados)
	// a perda de performance no mobile foi (muito) notavel)
	if(!dd) return;
	ee();
	// Fim: Metodo para garantir performance no mobile 
}
const aaa=document.querySelector("#select-de-cidades");
const bbb=async(uf)=>
{
	aaa.innerHTML=`<option value="nada">Escolha`;
	const ccc=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;
	const ddd=await fetch(ccc).then(response => response.json()).catch(error => false);
	const eee=()=>
	{
		ddd.forEach(fff=>
		{
			const {nome}=fff;
			aaa.innerHTML+=`<option value="${nome}">${nome}</option>`;
		});
	}
	// Inicio: Metodo para garantir performance no mobile 
	if(!ddd) return;
    eee();
	// Fim: Metodo para garantir performance no mobile 
}
bb();
aa.addEventListener("change",bbbb=>bbb(aa.value));
// Fim: Select de todos os estados e cidades //