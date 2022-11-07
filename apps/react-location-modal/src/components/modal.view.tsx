import type { PropsWithChildren, FC } from "react";

const Overlay = ({ children }: PropsWithChildren) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-opaque flex justify-center items-center">
      {children}
    </div>
  );
};

interface ModalViewProps {
  id: string;
  src: string;
}

const ModalView: FC<ModalViewProps> = ({ id, src }) => {
  return (
    <Overlay>
      <article
        aria-modal={true}
        role="dialog"
        tabIndex={-1}
        className="w-[90%] min-w-[500px] bg-white min-h-[450px] grid grid-cols-[0.3fr_0.7fr] rounded-md"
      >
        <div className="flex justify-center items-center bg-gray-900 rounded-[4px_4px]">
          <img src={src} alt="" className="max-w-full max-h-full object-cover" />
        </div>
        <div className="grid grid-rows-[70px_1fr_40px] p-3">
          <div>opener_official</div>
          <div>
            Aries Arise는 스트릿웨어의 선구자로 알려진 Sofia Prantera와 색다른 그래픽 스타일로
            유명한 그래픽 디자이너 Fergus Purcel가 함께 전개하는 스트릿 웨어 브랜드입니다. 이들은
            하이패션과 스트릿웨어를 융합한 디자인을 선보입니다. 남성주도적이던 스트릿웨어 시장에서
            여성을 위한 스트릿웨어를 제시하며 시작되었으며 현재는 다양한 사이즈의 유니섹스한 제품을
            생산합니다. 프린트와 핸드다잉 제품들은 모두 이스트런던에 위치한 스튜디오에서 완성됩니다.
          </div>
          <div>Add a comment...</div>
        </div>
      </article>
    </Overlay>
  );
};

export default ModalView;
