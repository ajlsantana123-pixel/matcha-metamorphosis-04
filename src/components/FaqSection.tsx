import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "📦 O que exatamente eu vou receber?",
    answer: "Você receberá acesso imediato a um guia digital completo com receitas de chás japoneses naturais que ajudam no emagrecimento, redução de inchaço, aceleração do metabolismo e muito mais. São combinações simples, práticas e com ingredientes acessíveis."
  },
  {
    question: "🕒 Em quanto tempo começo a ver resultados?",
    answer: "Algumas mulheres relatam redução de inchaço logo nos primeiros 3 dias. Mas cada corpo responde de forma única. O mais importante é seguir o ritual diariamente, como indicado no guia."
  },
  {
    question: "🧘‍♀️ Preciso fazer dieta ou academia junto?",
    answer: "Não. O foco aqui é em desinflamar seu corpo com chás naturais. Claro que hábitos saudáveis aceleram o processo, mas o guia foi criado justamente para mulheres com pouco tempo, sem rotina de treinos e que já tentaram de tudo."
  },
  {
    question: "🧓 Esse guia funciona para mulheres na menopausa?",
    answer: "Sim! O protocolo foi desenvolvido especialmente para mulheres que sofrem com retenção, metabolismo lento e mudanças hormonais — incluindo o período da menopausa e pós-menopausa."
  },
  {
    question: "💊 Preciso tomar algum remédio junto?",
    answer: "Não. Este método é 100% natural e sem contraindicações. Nada de remédios, cápsulas ou fórmulas mágicas. Só ingredientes reais, usados há séculos na cultura japonesa."
  },
  {
    question: "📱 Como vou acessar o guia?",
    answer: "Assim que sua compra for confirmada, você recebe um e-mail com o link para acesso imediato ao material, que pode ser lido no seu celular, tablet ou computador."
  },
  {
    question: "👩‍⚕️ É seguro para minha saúde?",
    answer: "Sim! As receitas são baseadas em ingredientes naturais, amplamente estudados e usados pela medicina oriental. Mas se estiver grávida, amamentando ou em tratamento específico, consulte seu médico antes."
  },
  {
    question: "💸 E se eu não gostar? Tem garantia?",
    answer: "Sim! Você tem 7 dias de garantia incondicional. Se não sentir nenhuma diferença ou achar que o material não é pra você, basta enviar um e-mail e devolveremos 100% do seu investimento."
  }
];

export const FaqSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 px-4 gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-primary">
          ❓PERGUNTAS FREQUENTES
        </h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-card overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-smooth"
              >
                <span className="font-semibold text-lg text-foreground pr-4">
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openItems.includes(index) ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};