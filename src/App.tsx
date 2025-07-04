import './index.scss'
import LogoImage from '@/assets/images/logo.png'
import AndroidButtonImage from '@/assets/images/android-button.png'
import IosButtonImage from '@/assets/images/ios-button.png'
import UpdateListImage from '@/assets/images/update-list.png'
import GameGroupImage from '@/assets/images/game-group.png'
import YellowCardBgImage from '@/assets/images/yellow-bg.png'
import YellowImg4Image from '@/assets/images/yellow-img-4.png'
import YellowImg5Image from '@/assets/images/yellow-img-5.png'
import YellowImg6Image from '@/assets/images/yellow-img-6.png'
import YellowImg7Image from '@/assets/images/yellow-img-7.png'
import YellowImg8Image from '@/assets/images/yellow-img-8.png'
import YellowImg9Image from '@/assets/images/yellow-img-9.png'
import YellowImg10Image from '@/assets/images/yellow-img-10.png'
import PurpleCardBgImage from '@/assets/images/purple-bg.png'
import PurpleImg1Image from '@/assets/images/purple-img-1.png'
import PurpleImg2Image from '@/assets/images/purple-img-2.png'
import PurpleImg3Image from '@/assets/images/purple-img-3.png'
import PurpleImg4Image from '@/assets/images/purple-img-4.png'
import PurpleImg5Image from '@/assets/images/purple-img-5.png'
import PurpleImg6Image from '@/assets/images/purple-img-6.png'
import PurpleImg7Image from '@/assets/images/purple-img-7.png'
import PurpleImg8Image from '@/assets/images/purple-img-8.png'
import SuccessImage from '@/assets/images/success.png'
import { toast, ToastContainer } from 'react-toastify'

const updateList = `
  <div>元神功能正式上线，所有17级以上玩家，完成主线任务《赤兔追风化元神》后即可解锁元神功能，欢迎大家体验。目前仅开放了部分元神内容，包括元神的鉴定、获取，升级等。其余功能将陆续上线，敬请期待。由于元神系统过于庞大且复杂，可能会在体验过程中发现诸多不完善或者有BUG的地方，望大家多多海涵，可在第一时间向我们反馈，感激不尽。</div>
  <br/>
  <div class='font-600' style='color: #FF8C52;'>《合服详细内容》</div>
  <div>为提升游戏氛围与玩家体验，我们决定于<span class='text-green'>2025年7月10日10:00</span>，进行服务器合并操作，预计需要1~2天！届时我们将把 <span class='text-yellow'>＜桃园结义>、＜群雄逐鹿>、＜赤壁之战></span> 合并为1个大区，其中<span class='text-yellow'><桃园结义></span>将作为主服务器，另外两个服务器的所有玩家数据将全部并入主服务器中。具体规则如下：</div>
  <div class='text-yellow'>一、角色处理</div>
  <div>1、同一个账号若在3个大区均有角色，合并后所有的角色将全部合并到<桃园结义>。</div>
  <div>2、同名角色将被系统添加特殊标识符号，并为其提供临时改名服务。</div>
  <div class='text-yellow'>二、军团处理</div>
  <div>1、同名军团将被系统添加特殊标识符号，军团长可将军团进行临时重命名。</div>
  <div class='text-yellow'>三、寄卖处理</div>
  <div>1、为确保道具安全，我们将在2025年7月06日10:00暂停所有的寄卖上架。</div>
  <div>2、在2025年7月10日10:00维护之前，请提前收取掉所有下架邮件！</div>
  <div class='text-yellow'>四、邮件处理</div>
  <div>1、请所有玩家务必在合服之前收取所有带有道具的邮件，否则将会有丢失风险！</div>
  <div class='text-yellow'>五、排行榜处理</div>
  <div>1、服务器合并后，所有排行榜都将依据合并后的角色数据重新排名。</div>
  <div class='text-yellow'>六、发布任务处理</div>
  <div>1、为确保道具安全，我们将在2025年7月06日10:00暂停发布任务功能。</div>
  <br/>
  <div class='font-600'>【7月3日更新】</div>
  <div class='text-yellow'>新增优化：</div>
  <div>1、提升物理职业的基础命中。</div>
  <div>2、提升物理职业的基础暴击。</div>
  <br/>
  <div class='font-600'>【7月2日更新】</div>
  <div class='text-yellow'>新增优化：</div>
  <div>1、暂停特殊四级、五级、六级翅膀回收。</div>
  <div>2、新增五级、六级翅膀升级兑换，玩家可以通过积分回收功能中补扭蛋积分差价对翅膀进行升级。</div>
  <div>3、调整法系职业技能允许<暴击>和<未命中>。</div>
  <br/>
  <div class='font-600'>【6月25日更新】</div>
  <div class='text-green'>修复BUG：</div>
  <div>1、修复物防、法防显示异常。</div>
  <div>2、修复元神技能：＜不动如山＞、<豪门意气>提升的防御展示异常。</div>
  <div>3、修复元神技能：＜银枪刺喉>流血效果异常。</div>
  <div>4、修复80级以上无法领取国令任务。</div>
  <div>5、修复80级以上无法领取行脚商的委托。</div>
  <br/>
  <div class='font-600'>【6月21日更新】</div>
  <div class='text-yellow'>新增优化：</div>
  <div>1、开启角色等级上限：90级！</div>
  <div>2、提前停经验BOSS玩法！</div>
  <br/>
  <div class='font-600'>【6月16日更新】</div>
  <div class='text-yellow'>新增优化：</div>
  <div>1、新增经验BOSS活动，在襄阳南郊、江夏西郊、临江东郊，随机刷新：关羽、张飞、赵云、马超、黄忠，击杀后会获得一定数量超级张飞扭蛋大补丸。华容道、五丈原，随机刷新：真•关羽、真•张飞、真•赵云、真•马超、真•黄忠，击杀后会获得一定数量五虎经验丸，使用获得超级张飞扭蛋大补丸10倍的经验！</div>
  <div class='text-green'>修复BUG：</div>
  <div>1、修复元神技能：＜沉稳>、＜不动如山＞、＜皮糙肉厚＞、＜豪门意气＞、＜坚守＞、＜庇护>等防御加成属性表现异常。</div>
  <div>2、修复九阶元神升级十阶元神时，保留技能BUG。</div>
  <br/>
  <div class='font-600'>【6月15日更新】</div>
  <div class='text-yellow'>新增优化：</div>
  <div>1、新增经验大放送活动，持续到6月30日，活动期间30级以上玩家击杀怪物所得经验提升100%。（使用后直接获得经验类道具不参与活动）</div>
  <div>2、开启功能：交易、寄卖、属性精华、抗性升级。</div>
  <div>3、重新优化了所有伤害结算数值。</div>
  <div>4、重新调整了部分职业的伤害。</div>
  <div>5、重新优化元神皮肤属性加成。</div>
  <div class='text-green'>修复BUG：</div>
  <div>1、修复了玩家通过非法手段刷道具的BUG，并封禁了大量账号。</div>
  <div>2、修复经验类道具使用时，显示增加值比实际增加值少。</div>
  <div>3、修复交易功能可能导致的道具异常丢失。</div>
  <br/>
  <div class='text-yellow'>新增内容：</div>
  <div>
    <div>1、下架六级翅膀及特四级翅膀、特殊五级翅膀兑换道具。</div>
    <div>2、新增1-10阶元神精元。</div>
    <div>3、新增元神扭蛋机，玩家可通过蛋积分兑换炫酷的元神皮肤。</div>
    <div>4、新增61-80级装备。</div>
    <div>5、新增各个职业70级与80级职业技能。</div>
    <div>6、新增元神相关副职业配方与道具。</div>
    <div>7、商城新增元神相关道具。</div>
    <div>8、商城新增符鬼外观道具。</div>
    <div>9、新增70级与80级装备打造配方与道具。</div>
    <div>10、增加60级-80级怪物掉落。</div>
  </div>
  <div class='text-yellow'>优化调整：</div>
  <div>
    <div>1、重新调整各个职业技能伤害系数。</div>
    <div>2、为配合新版本强度，重新调整了怪物属性。</div>
    <div>3、优化服务性能，提升游戏流畅度。</div>
  </div>
  <br/>
  <div class='font-600'>【6月5日更新】</div>
  <div class='text-green'>修复BUG：</div>
  <div>1、修复部分仙术师技能施放时未能正确限时特效。</div>
  <br/>
  <div class='font-600'>【6月1日更新】</div>
  <div class='text-green'>修复BUG：</div>
  <div>1、修复此前组队状态与非组队状态怪物经验结算错误。</div>
  <div>2、修复个别等级BOSS经验异常，确保BOSS产出经验与等级匹配。</div>
  <div>3、暂时下架道具<置身事外丸>。</div>
  <div>4、暂时限制制符师配方<置身事外符>使用。</div>
  <div>5、下调<置身事外丸>、<置身事外符>的持续时间为1分钟。</div>
  <br/>
  <div class='font-600'>【5月23日更新】</div>
  <div class='text-yellow'>新增优化：</div>
  <div>1、工资商店新增商品：中级精钢矿锄、中级花蒲木耙。</div>
  <br/>
  <div class='font-600'>【5月22日更新】</div>
  <div class='text-yellow'>新增优化：</div>
  <div>1、为避免误操作，修改所有红色品质装备为不可出售。</div>
  <div class='text-green'>修复BUG：</div>
  <div>1、修复精华提升属性周限制次数异常。</div>
  <br/>
  <div class='font-600'>【5月21日更新】</div>
  <div class='text-yellow'>新增优化：</div>
  <div>1、调整精华提升属性的方式，使得玩家可以在满级后依然可以使用精华积攒经验。</div>
  <br/>
  <div class='font-600'>【5月15日更新】</div>
  <div class='text-green'>修复BUG：</div>
  <div>1、修复道具<催神丸>效果异常。</div>
  <div>2、修复促力丸，必伤散，瞬风露描述不正常。</div>
  <br/>
  <div class='font-600'>【5月14日更新】</div>
  <div class='text-green'>修复BUG：</div>
  <div>1、修复道具<催神丸>效果异常。</div>
  <div>2、修复部分副本怪物属性异常。</div>
  <br/>
  <div class='font-600'>【5月12日更新】</div>
  <div class='text-yellow'>新增优化：</div>
  <div>1、新增玩家特效屏蔽功能，可在PK开启界面进行设置。</div>
  <div class='text-green'>修复BUG：</div>
  <div>1、修复切线后聊天记录未保存问题。</div>
  <div>2、修复线路负载状态未正常显示。</div>
  <br/>
  <div class='font-600'>【5月10日更新】</div>
  <div class='text-yellow'>新增优化：</div>
  <div>1、豪杰职业优化1：重新调整了大部分技能的释放逻辑，以期技能释放节奏更加灵动。</div>
  <div>2、豪杰职业优化2：降低技能<霸王斧>的冷却时间，同时增加了其眩晕的持续时间。</div>
  <div>3、新增江陵干货商售卖商品：美味家常食谱。</div>
  <div>4、重构游戏客户端资源，及加载方式。</div>
  <div class='text-green'>修复BUG：</div>
  <div>1、修复服务器异常卡顿问题。</div>
`

const getDownLoadUrl = (type) => {
  switch (type) {
    case 'android':
      return 'https://s3.dualstack.ap-southeast-1.amazonaws.com/menghuansg.com/CDN/GameApk/sanguo.apk'
    case 'ios':
      return 'https://downpack.net/cpPRV1'
    default:
      return ''
  }
}

const showNotification = (message) => {
  toast.success(
    <div className="toast-item">
      <div className="icon">
        <img src={SuccessImage} />
      </div>
      <span>{message}</span>
    </div>,
    {
      position: 'top-center',
      closeButton: false,
      closeOnClick: true,
    }
  )
} 


function App() {
  const onDownLoad = (type) => {
    const url = getDownLoadUrl(type)
    // @ts-ignore
    window.gtag('event', `${type}_download`);
    window.location.href = url
  }

  const onCopy = async(str, isInvitationCode = false) => {
    // @ts-ignore
    window.gtag('event', isInvitationCode? `copy_invitation_code`: `copy_qq_group_id`);
    await navigator.clipboard.writeText(str);
    showNotification('复制成功')
  }

  return (
    <>
      <div className='container'>
        <div className='bg' />
        <div className='content'>
          <div className='logo'>
            <img src={LogoImage} />
          </div>
          <div className='download-buttons'>
            <a onClick={() => onDownLoad('android')}>
              <img src={AndroidButtonImage} />
            </a>
            <a onClick={() => onDownLoad('ios')}>
              <img src={IosButtonImage} />
            </a>
          </div>
          <div className='update-list'>
            <div className='img'>
              <img src={UpdateListImage} />
            </div>
            <div className='text' dangerouslySetInnerHTML={{ __html: updateList }} />
          </div>
          <div className='game-group'>
            <div className='img'>
              <img src={GameGroupImage} />
            </div>
            <div className='text'>
              <div onClick={() => onCopy('1050397559')}>1050397559</div>
              <div onClick={() => onCopy('1050752511')}>1050752511</div>
              <div onClick={() => onCopy('822564753')}>822564753</div>
            </div>
          </div>
          <div className='yellow-card'>
            <div className='card-bg'>
              <img src={YellowCardBgImage} />
            </div>
            <div className='card-main'>
              <div className='img-4'>
                <img src={YellowImg4Image} />
              </div>
              <div className='img-5'>
                <img src={YellowImg5Image} />
              </div>
              <div className='img-6'>
                <img src={YellowImg6Image} />
              </div>
              <div className='img-7'>
                <img src={YellowImg7Image} />
              </div>
              <div className='img-8'>
                <img src={YellowImg8Image} />
              </div>
              <div className='img-9'onClick={() => onCopy('R99999')}>
                <img src={YellowImg9Image} />
              </div>
              <div className='img-10'>
                <img src={YellowImg10Image} />
              </div>
            </div>
          </div>

          <div className='purple-card'>
            <div className='card-bg'>
              <img src={PurpleCardBgImage} />
            </div>
            <div className='card-main'>
              <div className='img-1'>
                <img src={PurpleImg1Image} />
              </div>
              <div className='img-2'>
                <img src={PurpleImg2Image} />
              </div>
              <div className='split-line'/>
              <div className='img-3'>
                <img src={PurpleImg3Image} />
              </div>
              <div className='img-4'>
                <img src={PurpleImg4Image} />
              </div>
              <div className='img-5'>
                <img src={PurpleImg5Image} />
              </div>
              <div className='img-6'>
                <img src={PurpleImg6Image} />
              </div>
              <div className='img-7'>
                <img src={PurpleImg7Image} />
              </div>
              <div className='img-8'>
                <img src={PurpleImg8Image} />
              </div>
            </div>
          </div>

          <div className='footer'>
            <div>游戏内涉及账号、装备等道具交易需仔细，谨防诈骗！</div>
            <div>menghuansanguo.com © 2025</div>
          </div>
        </div>
      </div>
      <ToastContainer
        className="toast-container"
        bodyClassName="toast-body"
        hideProgressBar
        icon={ false }
        pauseOnHover={ false }
        theme="dark"
        stacked
        autoClose={3000}
      />
    </>
  )
}

export default App
