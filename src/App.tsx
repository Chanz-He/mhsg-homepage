import './index.scss'

function App() {

  const copyCode = () => {
    navigator.clipboard.writeText('R99999')
      .then(() => {
        alert('复制成功：R99999')
      })
      .catch(err => {
        alert('复制失败')
        console.error(err)
      })
  }
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
  })


  return (
    <>
      <div className='top'>
        <div className='title'><img src="src/images/title.png" alt="" /></div>
        <div>
          <a href="">
            <div className='android'><img src="src/images/android.png" alt="" /></div>
          </a>
          <a href="">
            <div className='apple'><img src="src/images/apple.png" alt="" /></div>
          </a>
        </div>
        <div className='exclusive'>
          <div className='exclusiveTitle'><img src="src/images/Exclusive.png" alt="" /></div>
          <div className='exclusiveMain'>
            <div className='r99999'><img src="src/images/R99999.png" alt="" /></div>
            <div className='receive'>仅限领一次</div>
            <div className='invitationCode' onClick={copyCode} style={{ cursor: 'pointer' }}>
              <img src="src/images/InvitationCode.png" alt="点击复制邀请码" />
            </div>
            <div><img src="src/images/gift.png" alt="" /></div>
            <div className='gift'>礼包包含自动战斗*1、自动补给*1、背包扩容*3、内测专员套装*1</div>
            <div className='giftPack'>
              <div className='giftPackWord'>如何领取礼包</div>
              <div><img src="src/images/giftPack1.png" alt="" /></div>
              <div><img src="src/images/giftPack2.png" alt="" /></div>
              <div><img src="src/images/giftPack3.png" alt="" /></div>
              <div><img src="src/images/giftPack4.png" alt="" /></div>
            </div>
          </div>
        </div>
        <div className='haveFun'>
          <div className='haveFunTitle'><img src="src/images/HaveFun1.png" alt="" /></div>
          <div className='haveFunMain'>
            <div className='vip666'><img src="src/images/HaveFun2.png" alt="" /></div>
            <div className='receive'>每个码均可领一次</div>
            <div className='line'><img src="src/images/HaveFun3.png" alt="" /></div>
            <div className='gift'>礼包包含张飞大补丸、抗性丸、活力不竭、五铢等道具</div>
            <div className='giftPack'>
              <div className='giftPackWord'>如何领取礼包</div>
              <div><img src="src/images/HaveFun4.png" alt="" /></div>
              <div><img src="src/images/HaveFun5.png" alt="" /></div>
              <div><img src="src/images/HaveFun6.png" alt="" /></div>
              <div><img src="src/images/HaveFun7.png" alt="" /></div>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='bottom1'>游戏交流群:854611971</div>
          <div className='bottom2'>进群备注三国手游</div>
        </div>
      </div>
    </>
  )
}

export default App
