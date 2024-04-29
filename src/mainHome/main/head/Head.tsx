import './Head.scss'

export const Head = () => {
    return (
            <div className='head'>                
                <div className='head_content'>
                    <div className='head_content_title'>
                        - 이충헌 -<br/>
                        
                        백엔드 개발자 포트폴리오                        
                    </div>
                    <hr className='head_content_divier'/>
                    <div className='head_content_description'>
                        안녕하세요.<br/>
                        풀 스택 백엔드 개발자 입니다.<br/>
                        꼼꼼한 성격, 자기개발을 밥 먹듯이 하는 습관이 저의 장점입니다.
                    </div>
                    <div className='head_content_find-out-more'>더 알아보기 ↓</div>
                </div>
            </div>
    );
}