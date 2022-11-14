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
// Inicio: Estados //
function aa()
{
	const estados=document.querySelector("#select-de-estados");
	estados.innerHTML=`<option value="">SELECIONE</option>`;
	const pegarEstados=async()=>
	{
		const link=`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`;
		const data=await fetch(link).then(response => response.json()).catch(error => false);
		if(!data) return;
		inserirEstados(data);
	}
	const inserirEstados=(data)=>
	{
		data.forEach(linha=>
		{
			const {sigla,nome}=linha;
			estados.innerHTML+=`<option value="${sigla}">${nome}</option>`;
		});
		estados.addEventListener("change", e => pegarCidades(estados.value));
	}
	const cidades=document.querySelector("#select-de-cidades");
	cidades.innerHTML = `<option value="">SELECIONE</option>`;
	const pegarCidades=async(uf)=> 
	{
		const link = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;
		const data = await fetch(link).then(response => response.json()).catch(error => false);
		if(!data) return;
		inserirCidades(data);
	}
	const inserirCidades=(data)=>
	{
		data.forEach(linha=>
		{
			const {nome}=linha;
			cidades.innerHTML+=`<option value="${nome}">${nome}</option>`;
		});
	}
	pegarEstados()
}
aa()
// Fim: Select de todos os estados e cidades //