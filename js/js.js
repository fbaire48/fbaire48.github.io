// Inicio: Scroll js //
function principal()
{
	function a(event)
	{
		b=event.target;
		c=b.getAttribute('href');
		d=document.querySelector(c).offsetTop;
		e=window.scroll(
							{
								top:d-60,
								behaviour:'smooth',
							},
						);
		f=event.preventDefault();
	};
	function g()
	{
		h=document.querySelectorAll('a[href^="#"]');
		i=h.forEach(j=>
						{
							j.addEventListener('click',a);
						},
					);
	};
	function script()
	{
		g();
	};
	script();
};
principal();
// Fim: Scroll js //
// Inicio: Selector de todos os estados e cidades //
function principaldois()
{
	// Inicio: Estado //
	aa=document.querySelector("#select-de-estados");
	function bb()
	{
		dd=async()=>
		{
			cc=`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`;
			ee=await fetch(cc).then(response=>response.json()).catch(error => false);
			ff=()=>
			{
				ee.forEach
				(gg=>
					{
						const {sigla,nome}=gg;
						aa.innerHTML+=`<option value="${sigla}">${nome}</option>`;
					},
				);
			};
			if(!ee) return;
			ff();
		};
		dd();
	};
	// Fim: Estado //
	// Inicio: Cidade//
	hh=document.querySelector("#select-de-cidades");
	function ii()
	{
		jj=async(uf)=>
		{
			hh.innerHTML=`<option value="nada">Escolha`;
			kk=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;
			ll=await fetch(kk).then(response=>response.json()).catch(error => false);
			mm=()=>
			{
				ll.forEach
				(nn=>
					{
						const {nome}=nn;
						hh.innerHTML+=`<option value="${nome}">${nome}</option>`;
					},
				);
			};
			if(!ll) return;
			mm();
		};
		// Inicio: Utilizacao do .value (desempenho melhor) //
		jj(aa.value);
		// Fim: Utilizacao do .value (desempenho melhor) //
	};
	// Fim: Cidade //
	function script()
	{
		bb();
		aa.addEventListener("change",rr=>ii());
	};
	script();
};
principaldois();
// Fim: Selector de todos os estados e cidades //