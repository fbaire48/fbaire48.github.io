// Inicio: Scroll js //
function principal()
{
	function a(event)
	{
		event.preventDefault();
		b=event.target;
		c=b.getAttribute('href');
		d=document.querySelector(c).offsetTop;
		window.scroll
		(
			{
				top:d-60,
				behavior:'smooth'
			},
		);
	};
	function e()
	{
		f=document.querySelectorAll('a[href^="#"]');
		f.forEach
		(g=>
			{
				g.addEventListener('click',a)
			},
		);
	};
	function script()
	{
		e();
	};
	script();
};
principal();
// Fim: Scroll js //
// Inicio: Selector de todos os estados e cidades //
function principaldois()
{
	// Inicio: Estado //
	function a()
	{
		b=document.querySelector("#select-de-estados");
		return b;
	};
	function c()
	{
		d=async()=>
		{
			a().innerHTML=`<option value="nada">Escolha`;
			e=`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`;
			f=await fetch(e).then(response=>response.json()).catch(error => false);
			g=()=>
			{
				f.forEach
				(h=>
					{
						const {sigla,nome}=h;
						a().innerHTML+=`<option value="${sigla}">${nome}</option>`;
					},
				);
			};
			if(!f) return;
			g();
		};
		d();
	};
	// Fim: Estado //
	// Inicio: Cidade//
	function h()
	{
		i=document.querySelector("#select-de-cidades");
		return i;
	};
	function j()
	{
		k=async(uf)=>
		{
			h().innerHTML=`<option value="nada">Escolha`;
			l=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;
			m=await fetch(l).then(response=>response.json()).catch(error => false);
			n=()=>
			{
				m.forEach
				(o=>
					{
						const {nome}=o;
						h().innerHTML+=`<option value="${nome}">${nome}</option>`;
					},
				);
			};
			if(!m) return;
			n();
		};
		// Inicio: Utilizacao do .value (desempenho melhor) //
		k(a().value);
		// Fim: Utilizacao do .value (desempenho melhor) //
	};
	// Fim: Cidade //
	function script()
	{
		c();
		p=a().addEventListener("change",q=>j());
	};
	script();
};
principaldois();
// Fim: Selector de todos os estados e cidades //