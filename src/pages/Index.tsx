import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FaqSection } from "@/components/FaqSection";
import { CheckCircle, Clock, Shield, Zap, Sparkles, ArrowRight, Star } from "lucide-react";

const Index = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 gradient-hero">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Mulheres acima dos 40 estão <span className="highlight-word">secando a barriga</span> com um <span className="highlight-word">ritual japonês</span> de 5 minutos antes do café da manhã
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Sem precisar ir pra academia, sem passar fome e sem gastar com produtos caros — é só seguir as <span className="highlight-word">receitas naturais</span> do Guia e <span className="highlight-word">começar a desinchar</span> já nas primeiras 48h.
          </p>
          
          {/* Hero Image */}
          <div className="mb-8 max-w-2xl mx-auto">
            <img 
              src="/lovable-uploads/33709887-83fa-4437-a2a5-2ce76403bdce.png" 
              alt="Mulher medindo a cintura com fita métrica ao lado de chá natural" 
              className="w-full h-auto rounded-2xl shadow-elevation"
            />
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-4xl mx-auto">
            <p className="text-white/95 text-base md:text-lg leading-relaxed">
              Esse <span className="highlight-word">método japonês</span> é usado há séculos, mas só agora foi adaptado para a realidade brasileira — e está <span className="highlight-word">disponível somente aqui</span>.
            </p>
          </div>

          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToOffer}
            className="mb-8 relative overflow-hidden group text-white"
          >
            <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
            Quero conhecer o <span className="highlight-word">ritual japonês natural</span> agora
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-dark mb-6">
              Você não está sozinha.
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Milhares de mulheres estão enfrentando o mesmo problema: tentam dietas, remédios, academia… e nada parece funcionar. A barriga continua ali, o inchaço também.<br/>
              Mas a verdade é que o corpo feminino precisa de um <span className="highlight-word">estímulo diferente</span> — principalmente após os 30, 40 anos.<br/>
              E foi exatamente isso que centenas de mulheres descobriram ao começar um <span className="highlight-word">ritual natural e simples</span> com <span className="highlight-word">chás japoneses milenares</span>.<br/>
              Hoje, elas se sentem <span className="highlight-word">leves, desinchadas e com autoestima renovada</span>.
            </p>
          </div>

          <div className="bg-accent rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <p className="text-lg text-accent-foreground italic text-center">
              "Nada do que eu fazia funcionava. Dieta, treino, remédio… eu só queria voltar a caber no meu jeans."
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              Se você se sente assim, talvez o problema não seja o que você está comendo — mas o que o seu corpo deixou de conseguir queimar.<br/>
              O <span className="highlight-word">segredo</span> está na forma certa de <span className="highlight-word">reativar o seu metabolismo</span>… e isso começa com 5 minutos por dia e um <span className="highlight-word">simples chá natural</span>.
            </p>
            
            <Button variant="cta" size="lg" onClick={scrollToOffer} className="group text-white">
              <Star className="w-4 h-4 mr-2 animate-spin" />
              Quero conhecer o <span className="highlight-word">ritual japonês natural</span> agora
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Frustration Section */}
      <section className="py-16 px-4 gradient-subtle">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-muted-dark mb-12">
            Você já tentou de tudo e nada funcionou, né?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Elas estavam com a mesma sensação de fracasso até começarem a tomar os <span className="highlight-word">chás japoneses</span>.<br/>
            Confira alguns dos <span className="highlight-word">milhares de resultados</span>, que já aplicaram nossa rotina:
          </p>

          {/* Before/After Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-card">
              <img 
                src="/lovable-uploads/f6aebdb6-51c6-4097-9279-1847dd31fcbb.png" 
                alt="Resultado antes e depois"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-card">
              <img 
                src="/lovable-uploads/66fd9114-1bd0-4fc8-892e-8804cfc5718e.png" 
                alt="Resultado antes e depois"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-card">
              <img 
                src="/lovable-uploads/b91ff577-f766-4948-8020-cc916567d89d.png" 
                alt="Resultado antes e depois"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-card">
              <img 
                src="/lovable-uploads/79837a81-c965-4c6b-8ad6-5a97e58aa2c8.png" 
                alt="Resultado antes e depois"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Japanese Method Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-dark mb-8">
              Todo mundo sabe que os japoneses são um dos povos mais magros e longevos do mundo.
            </h2>
            
            {/* Japanese article image */}
            <div className="mb-8 max-w-3xl mx-auto">
              <img 
                src="/lovable-uploads/ca0cc982-2e5c-4706-9205-0dc71aedfec7.png" 
                alt="Artigo sobre as leis que ajudam o Japão a ser um dos países mais magros do mundo" 
                className="w-full h-auto rounded-xl shadow-card"
              />
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              Mas pouca gente se pergunta: por quê?<br/>
              A resposta está no <span className="highlight-word">ritual matinal</span> que eles mantêm há séculos — e que envolve <span className="highlight-word">ingredientes naturais, baratos, e sem contraindicações</span>.<br/>
              Você pode continuar gastando dinheiro com dietas que não funcionam, ou pode experimentar algo <span className="highlight-word">simples, natural e validado há séculos</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-muted rounded-xl border border-border/50 shadow-card hover:shadow-elevation transition-smooth">
              <div className="w-20 h-20 rounded-xl overflow-hidden mx-auto mb-4 bg-gradient-subtle">
                <img 
                  src="/src/assets/no-gym-required.webp" 
                  alt="Não exige academia - método natural em casa"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Não exige academia</h3>
            </div>
            
            <div className="text-center p-6 bg-muted rounded-xl border border-border/50 shadow-card hover:shadow-elevation transition-smooth">
              <div className="w-20 h-20 rounded-xl overflow-hidden mx-auto mb-4 bg-gradient-subtle">
                <img 
                  src="/src/assets/no-medicine-required.webp" 
                  alt="Não envolve remédios - 100% natural"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Não envolve remédios</h3>
            </div>
            
            <div className="text-center p-6 bg-muted rounded-xl border border-border/50 shadow-card hover:shadow-elevation transition-smooth">
              <div className="w-20 h-20 rounded-xl overflow-hidden mx-auto mb-4 bg-gradient-subtle">
                <img 
                  src="/src/assets/natural-practical.webp" 
                  alt="100% natural e prático - ingredientes naturais"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-2">É 100% natural e prático</h3>
            </div>
            
            <div className="text-center p-6 bg-muted rounded-xl border border-border/50 shadow-card hover:shadow-elevation transition-smooth">
              <div className="w-20 h-20 rounded-xl overflow-hidden mx-auto mb-4 bg-gradient-subtle">
                <img 
                  src="/src/assets/quick-results.webp" 
                  alt="Resultados rápidos - transformação em poucos dias"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Resultados visíveis em poucos dias</h3>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              Esse é o <span className="highlight-word">Guia Natural</span> que mulheres estão usando para <span className="highlight-word">perder barriga, desinchar</span> e voltar a se sentir bem no próprio corpo — mesmo depois dos 40.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Checklist */}
      <section className="py-16 px-4 gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-elevation">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Já tentou de tudo e ainda sente que sua barriga continua lá, firme e inchada?</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Descubra por que o que você come pode não ser o problema — mas o que o seu corpo não consegue queimar.</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Em vez de cortar tudo da dieta, que tal adicionar um chá natural e secar até 1kg por semana?</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Muitas mulheres relatam dormir melhor, acordar mais leves e caber de novo no jeans — sem sofrimento.</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Mesmo que você esteja sem tempo, sem ânimo e com os hormônios desregulados… esse ritual simples cabe no seu dia.</p>
              </div>
            </div>

            {/* Testimonial Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-xl p-4 shadow-card">
                <img 
                  src="/lovable-uploads/506eec70-a434-426f-b0d2-0b31eb352542.png" 
                  alt="Depoimento de transformação - antes e depois"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="bg-white rounded-xl p-4 shadow-card">
                <img 
                  src="/lovable-uploads/11493800-9934-478a-a6fb-1b30666eb4c3.png" 
                  alt="Depoimento de transformação - mudança de tamanho"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button variant="cta" size="lg" onClick={scrollToOffer}>
                Quero acessar o Guia Natural agora mesmo!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Results */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-dark mb-6">
              Resultado da sua avaliação…
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Com base nas suas respostas, identificamos que você pode estar enfrentando um bloqueio metabólico que está sabotando seus esforços para emagrecer — mesmo com dieta, treino ou remédio.<br/>
              Essa recomendação foi feita exclusivamente pra você, levando em conta seu nível de retenção, inchaço, falta de tempo e histórico de tentativas frustradas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📌</span>
                <div>
                  <h3 className="font-semibold text-muted-dark mb-2">Você sente que vive inchada, como se carregasse 3kg a mais de "peso invisível" o tempo todo?</h3>
                  <p className="text-muted-foreground">Esse tipo de retenção é comum em mulheres que estão com o metabolismo travado e os hormônios desregulados — especialmente após os 35.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📌</span>
                <div>
                  <h3 className="font-semibold text-muted-dark mb-2">Mesmo comendo menos, seu corpo parece não reagir?</h3>
                  <p className="text-muted-foreground">Isso acontece quando seu organismo entra em "modo de sobrevivência" e para de queimar gordura como antes.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📌</span>
                <div>
                  <h3 className="font-semibold text-muted-dark mb-2">Você já tentou tudo: low carb, jejum, remédio, chá aleatório… e nada funcionou?</h3>
                  <p className="text-muted-foreground">O problema não é você. É o como você está tentando. E esse guia foi criado pra corrigir isso.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📌</span>
                <div>
                  <h3 className="font-semibold text-muted-dark mb-2">Sua autoestima despencou e você já nem se sente confortável com roupas leves, biquínis ou vestidos justos?</h3>
                  <p className="text-muted-foreground">Acredite: recuperar sua confiança pode começar com algo simples — e natural.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📌</span>
                <div>
                  <h3 className="font-semibold text-muted-dark mb-2">Falta tempo, disposição e energia até pra cuidar de si mesma?</h3>
                  <p className="text-muted-foreground">O Guia foi pensado exatamente para mulheres como você: com rotina cheia, pouco tempo e muita cobrança.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="cta" size="lg" onClick={scrollToOffer}>
              Quero seguir o protocolo natural e secar minha barriga agora mesmo!
            </Button>
          </div>
        </div>
      </section>

      {/* Study Results */}
      <section className="py-16 px-4 gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-dark mb-8">
              o que aconteceu quando 53 mulheres testaram o Ritual Japonês por 14 dias
            </h2>
            
            {/* Study Image */}
            <div className="mb-8 max-w-2xl mx-auto">
              <img 
                src="/lovable-uploads/55c5686d-ae57-4ad8-843f-028321797555.png" 
                alt="Mulher segurando xícara com chá tradicional japonês" 
                className="w-full h-auto rounded-xl shadow-card"
              />
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-elevation max-w-4xl mx-auto mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Durante 2 semanas, um grupo de 53 mulheres entre 38 e 56 anos, todas com sintomas semelhantes aos seus — inchaço crônico, metabolismo travado, barriga saliente e cansaço constante — foi convidado a testar um protocolo com receitas tradicionais japonesas à base de ervas naturais.<br/>
                Nenhuma delas mudou dieta, entrou pra academia ou tomou remédios.<br/>
                Apenas adicionaram os chás exatos do guia, 2 vezes ao dia.
              </p>
              
              <h3 className="text-xl font-bold text-muted-dark mb-6">📉 Resultados surpreendentes — sem esforço, sem sacrifício:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">92%</span>
                  </div>
                  <p className="text-muted-foreground">relataram redução visível de inchaço em até 72h</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">85%</span>
                  </div>
                  <p className="text-muted-foreground">disseram que a barriga ficou "mais seca e menos estufada"</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">74%</span>
                  </div>
                  <p className="text-muted-foreground">eliminaram entre 1,5kg e 3,8kg em apenas 14 dias</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">68%</span>
                  </div>
                  <p className="text-muted-foreground">notaram melhora no sono, energia e disposição</p>
                </div>
                
                <div className="flex items-center space-x-3 md:col-span-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">100%</span>
                  </div>
                  <p className="text-muted-foreground">disseram: "foi muito mais fácil do que eu esperava"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-dark mb-8">
              Elimine o inchaço, acelere seu metabolismo e veja sua barriga secar em apenas 14 dias com o Guia de Chás Japoneses Naturais.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-muted-dark mb-3">• Chega de viver inchada e desconfortável</h3>
                <p className="text-muted-foreground">Com o ritual certo, seu corpo começa a eliminar líquidos retidos já nos primeiros dias — sem dieta, sem esforço.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-muted-dark mb-3">• A balança não se mexe mesmo você comendo pouco?</h3>
                <p className="text-muted-foreground">O Guia ativa o metabolismo que ficou lento com a idade e os hormônios — facilitando a queima de gordura naturalmente.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-muted-dark mb-3">• Baixa autoestima e vergonha do espelho?</h3>
                <p className="text-muted-foreground">À medida que seu corpo desincha, sua confiança renasce. As roupas voltam a servir, e o espelho vira seu aliado.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-muted-dark mb-3">• Falta de energia e cansaço constante?</h3>
                <p className="text-muted-foreground">Algumas combinações do Guia têm efeito energizante e ajudam a reduzir a fadiga física e mental já na primeira semana.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-muted-dark mb-3">• Você sente que já tentou de tudo e nada funciona?</h3>
                <p className="text-muted-foreground">Esse protocolo foi feito justamente para quem já perdeu a esperança — e quer uma solução simples, leve e de verdade.</p>
              </div>
            </div>
            
            <div className="bg-gradient-subtle rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-muted-dark mb-6 text-center">COMO FUNCIONA…</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Assim que você garantir acesso ao Guia de Chás Japoneses Naturais, vai receber tudo diretamente no seu e-mail, com instruções simples e detalhadas.<br/>
                Não precisa ser especialista, nem mudar sua rotina inteira.<br/>
                Basta seguir 2 rituais por dia. O resto, seu corpo faz sozinho.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-muted-dark mb-2">Escolha o chá ideal pra você (em menos de 5 min)</h4>
                    <p className="text-sm text-muted-foreground">No guia, você encontra uma seleção com os melhores chás para: Desinchar rapidamente, Ativar o metabolismo, Reduzir compulsão ou ansiedade. Você começa o ritual no mesmo dia — sem precisar comprar nada caro ou difícil de achar.</p>
                    <div className="mt-4">
                      <img 
                        src="/lovable-uploads/964b44be-742f-420a-ac2a-a2debc33bc50.png" 
                        alt="Diferentes tipos de chás japoneses tradicionais" 
                        className="w-full max-w-md h-auto rounded-xl shadow-card"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-muted-dark mb-2">Tome o chá no horário certo</h4>
                    <p className="text-sm text-muted-foreground">As receitas vêm com horários estratégicos pra potencializar os efeitos. Não exige jejum, dieta, treino… nada. Só seguir o momento ideal. O corpo responde naturalmente, eliminando retenção, reduzindo a barriga e aumentando energia.</p>
                    <div className="mt-4">
                      <img 
                        src="/lovable-uploads/78c3021a-14d2-4249-8aff-ec53db6aab2e.png" 
                        alt="Mulher segurando xícara de chá japonês" 
                        className="w-full max-w-md h-auto rounded-xl shadow-card"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-muted-dark mb-2">Repita por 7 a 14 dias</h4>
                    <p className="text-sm text-muted-foreground">Você vai sentir as roupas folgando, a barriga murchando e sua autoestima voltando — dia após dia. Combinado com hábitos simples (que também estão no guia), os resultados se multiplicam. Você assume o controle do seu corpo, sem sofrimento, sem culpa — e com leveza.</p>
                    <div className="mt-4">
                      <img 
                        src="/lovable-uploads/d8bb983f-8bc2-4e5a-b996-b729a19122a6.png" 
                        alt="Mulher mostrando resultados após usar o ritual japonês" 
                        className="w-full max-w-md h-auto rounded-xl shadow-card"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4 gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-dark mb-8">
              🎁 O que você vai receber ao acessar o Guia de Chás Japoneses Naturais
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Assim que confirmar seu acesso, você vai receber imediatamente no seu e-mail todo o conteúdo digital — organizado, simples e fácil de aplicar.<br/>
              Veja tudo que você terá à disposição:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-elevation">
              <div className="flex items-start space-x-4 mb-6">
                <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-muted-dark mb-3">1. Guia Digital "Chás Japoneses Naturais" (PDF completo)</h3>
                  <p className="text-muted-foreground">📘 Mais de 40 combinações naturais com ervas testadas no Japão para: Desinchar o corpo em até 72h, Ativar a queima de gordura profunda, Regular hormônios e acelerar o intestino</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mb-6">
                <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-muted-dark mb-3">2. Rituais de 7, 14 e 21 dias (Protocolos prontos)</h3>
                  <p className="text-muted-foreground">🧭 Rotinas simples para quem quer começar com foco, sem perder tempo montando nada.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-muted-dark mb-3">3. Lista de ingredientes simples (mercado + casa de ervas)</h3>
                  <p className="text-muted-foreground">🛒 Nada de ingredientes difíceis ou caros. Você recebe a lista com alternativas nacionais e acessíveis, inclusive versões para fazer com o que já tem em casa.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-muted-dark">Bônus 1 – Mini-Guia "Chás Anti-Compulsão"</h3>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground line-through">De R$39,99</p>
                    <p className="font-bold text-secondary">Por R$0,00</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Um guia extra com as 7 melhores combinações naturais para controlar a vontade incontrolável de doces e beliscos fora de hora. Ideal para TPM, ansiedade e momentos de estresse. Resultado: Menos culpa, mais leveza e controle emocional ao longo do dia.
                </p>
                <div className="mt-4">
                  <img 
                    src="/lovable-uploads/cd45e852-c5eb-45de-8e40-7dbd0279c5ac.png" 
                    alt="Chá desinchante com limão"
                    className="w-full h-auto rounded-xl shadow-card"
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-muted-dark">Bônus 2 – Cardápio Desinchante de 3 Dias</h3>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground line-through">De R$49,99</p>
                    <p className="font-bold text-secondary">Por R$0,00</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Uma sequência simples de alimentos + receitas combinadas com os chás, criada para turbinar os primeiros resultados e eliminar líquidos rapidamente. Use quando quiser um "choque de desinchar" — antes de um evento, viagem ou para se motivar logo no começo.
                </p>
                <div className="mt-4">
                  <img 
                    src="/lovable-uploads/4bc154ee-4f85-4034-8631-8eac9dec4247.png" 
                    alt="Alimentos naturais variados para cardápio desinchante"
                    className="w-full h-auto rounded-xl shadow-card"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-dark mb-8">
              Veja o resultado de apenas algumas das centenas de mulheres que aplicaram a rotina dos Chás japoneses
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-elevation transition-smooth">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-foreground">Juliana, 39 anos</h4>
                  <p className="text-sm text-muted-foreground">MG</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-2 -left-2 text-4xl text-primary opacity-20">"</div>
                <p className="text-muted-foreground leading-relaxed italic relative z-10">
                  Eu não queria ser fitness, só queria me olhar no espelho sem chorar. Depois que comecei o ritual dos chás, desinchei tanto que minhas calças jeans antigas voltaram a servir. Hoje eu consigo me vestir sem vergonha, e meu marido até comentou como estou mais leve e sorridente.
                </p>
              </div>
              
              <div className="mt-4">
                <img 
                  src="/lovable-uploads/4ee4c24e-4226-4a3c-9f8b-36455372cc69.png" 
                  alt="Antes e depois de Juliana" 
                  className="w-full h-auto rounded-xl shadow-card"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-elevation transition-smooth">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  D
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-foreground">Dirleide Motta, 42 anos</h4>
                  <p className="text-sm text-muted-foreground">PR</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-2 -left-2 text-4xl text-primary opacity-20">"</div>
                <p className="text-muted-foreground leading-relaxed italic relative z-10">
                  Depois da menopausa, meu corpo travou. Só acumulava barriga e me sentia um lixo. Esse guia me mostrou que não era culpa minha — só faltava o método certo. Fiz o ritual por 21 dias e além de perder 5kg, ganhei minha autoestima de volta. Foi a melhor decisão que tomei por mim mesma.
                </p>
              </div>
              
              <div className="mt-4">
                <img 
                  src="/lovable-uploads/b5229e52-2495-4b5b-aab9-a37cef37f898.png" 
                  alt="Antes e depois de Dirleide Motta" 
                  className="w-full h-auto rounded-xl shadow-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Benefits */}
      <section className="py-16 px-4 gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-dark mb-8">
              O que você ganha ao acessar o Guia dos Chás Japoneses?
            </h2>
            
            {/* User uploaded image */}
            <div className="mb-8 max-w-2xl mx-auto">
              <img 
                src="/lovable-uploads/2b7b8d04-cda6-4020-a946-c61c9ce87ce9.png" 
                alt="Transformação de barriga com resultado do método japonês" 
                className="w-full h-auto rounded-xl shadow-card"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">Aprenda um ritual 100% natural, rápido e simples de seguir, que já ajudou milhares de mulheres a desinchar e emagrecer sem sofrimento.</p>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">Elimine o inchaço e a "barriga estufada" em poucos dias, mesmo que já tenha tentado de tudo.</p>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">Use o poder dos ingredientes japoneses para acelerar seu metabolismo mesmo depois dos 40.</p>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">Destrave o emagrecimento sem academia, sem precisar cortar tudo da sua alimentação.</p>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">Reduza a ansiedade por doces e o apetite desregulado de forma natural e leve.</p>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">Restaure seu bem-estar, disposição e confiança, com um método feito pra sua rotina corrida.</p>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">Sinta suas roupas mais leves no corpo — e seu corpo mais leve na alma.</p>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">Acorde mais animada, durma melhor e volte a se sentir você mesma.</p>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">Chega de culpas, remédios e promessas falsas — você merece um caminho real.</p>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground">Torne-se uma mulher mais segura, amada por si mesma e com o controle da própria saúde de volta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-16 px-4 gradient-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Você já viu o poder do Guia Digital com Receitas de Chás Japoneses Naturais. Agora chegou o momento de dar o próximo passo:
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-elevation mb-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-2xl text-muted-foreground line-through">De R$97</span>
                <span className="text-4xl font-bold text-primary">por apenas R$19,90</span>
              </div>
              <p className="text-muted-foreground">(ou até 2x de R$10,48 no cartão)</p>
            </div>
            
            <div className="text-left mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Por menos do que o preço de um combo de fast food, você garante acesso imediato a:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Receitas 100% naturais para queima de gordura localizada</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Fórmulas simples que aceleram o metabolismo e desincham em minutos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Um plano prático que pode ser seguido por qualquer mulher — mesmo sem tempo ou rotina regrada</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Acesso imediato no celular, computador ou tablet</p>
                </div>
              </div>
              
              <p className="text-lg font-semibold text-muted-dark mt-6">
                🎁 E ainda recebe bônus exclusivos por tempo limitado!
              </p>
            </div>
            
            <div className="bg-accent rounded-lg p-4 mb-8">
              <p className="text-accent-foreground font-semibold">⚠️ Essa condição está temporariamente liberada</p>
              <p className="text-accent-foreground text-sm">O valor simbólico de R$19,90 é parte de uma ação promocional para as primeiras clientes. Pode sair do ar a qualquer momento, sem aviso.</p>
            </div>
            
            <Button variant="hero" size="xl" className="w-full mb-6 min-h-14 group relative overflow-hidden" onClick={() => window.open('https://pay.kiwify.com.br/IFpfOfk', '_blank')}>
              <Zap className="w-6 h-6 mr-3 animate-pulse" />
              SIM, QUERO ACESSAR POR R$19,90 AGORA
              <Sparkles className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
          
          {/* Guarantee */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">🔒 Garantia Incondicional de 30 Dias</h3>
            
            {/* Guarantee badge image */}
            <div className="mb-6 flex justify-center">
              <img 
                src="/lovable-uploads/34f9bc33-4eda-4938-8d20-7539d156e215.png" 
                alt="Selo de garantia de 30 dias" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </div>
            
            <div className="text-white/90 leading-relaxed space-y-4">
              <p>A sua única missão agora é testar.</p>
              <p>Se em 30 dias você não sentir nenhuma diferença real no seu corpo —</p>
              <p>Se você não se sentir mais leve, menos inchada, mais disposta —</p>
              <p>Se achar que esse guia não foi feito pra você…</p>
              <p className="font-semibold">Basta mandar um e-mail e devolvemos 100% do seu dinheiro.</p>
              <p>Sem perguntas, sem constrangimento.</p>
              <p>Essa é uma forma de mostrar que eu confio tanto no que preparei, que assumo todo o risco por você.</p>
            </div>
          </div>
          
          <div className="text-white mb-8">
            <p className="text-lg mb-6">📌 A decisão agora está nas suas mãos — você só tem duas opções:</p>
            <div className="text-left space-y-4 max-w-3xl mx-auto">
              <p>1. Ignorar essa chance e continuar se sentindo mal com seu corpo, suas roupas apertadas e aquela frustração de "já tentei de tudo"...</p>
              <p>2. Ou dar um passo simples hoje, testar o guia com total tranquilidade e finalmente ter o controle de volta nas suas mãos.</p>
            </div>
          </div>
          
          <Button variant="hero" size="xl" className="w-full max-w-lg mx-auto min-h-14 group relative overflow-hidden" onClick={() => window.open('https://pay.kiwify.com.br/IFpfOfk', '_blank')}>
            <Shield className="w-5 h-5 mr-2 animate-bounce" />
            QUERO TESTAR POR 30 DIAS SEM RISCO
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted-dark text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/80">© 2024 Chás Japoneses Naturais. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
