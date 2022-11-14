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
function aa()
{
	// Inicio: Estados //
	const bb=document.querySelector("#select-de-estados")
	bb.innerHTML=`<option value="nada">Escolha`
	const cc=async()=>
	{
		const dd=`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`
		const ee=await fetch(dd).then(response=>response.json())
		ee.forEach(gg=> 
		{
			const {sigla,nome}=gg
			bb.innerHTML+=`<option value="${sigla}">${nome}</option>`
		});
	}
	cc()
	// Fim: Estados //
	// Inicio: Cidades //
	const aaa=document.querySelector("#select-de-cidades")
	aaa.innerHTML=`<option value="nada">Escolha`
	const bbb=async(uf)=> 
	{
		const ccc=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
		const ddd=await fetch(ccc).then(response => response.json())
		ddd.forEach(eee=>
		{
			const {nome}=eee
			aaa.innerHTML+=`<option value="${nome}">${nome}</option>`
		});
	}
	bb.addEventListener("change",aaaa=>bbb(bb.value))
}
	// Fim: Cidades//
aa()
// Fim: Select de todos os estados e cidades //