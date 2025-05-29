import './index.scss'
import LogoImage from '@/assets/images/logo.png'
import AndroidButtonImage from '@/assets/images/android-button.png'
import IosButtonImage from '@/assets/images/ios-button.png'
import YellowImg0Image from '@/assets/images/yellow-img-0.png'
import YellowImg1Image from '@/assets/images/yellow-img-1.png'
import YellowImg2Image from '@/assets/images/yellow-img-2.png'
import YellowImg3Image from '@/assets/images/yellow-img-3.png'
import YellowImg4Image from '@/assets/images/yellow-img-4.png'
import YellowImg5Image from '@/assets/images/yellow-img-5.png'
import YellowImg6Image from '@/assets/images/yellow-img-6.png'
import YellowImg7Image from '@/assets/images/yellow-img-7.png'
import YellowImg8Image from '@/assets/images/yellow-img-8.png'
import YellowImg9Image from '@/assets/images/yellow-img-9.png'
import YellowImg10Image from '@/assets/images/yellow-img-10.png'
import PurpleImg0Image from '@/assets/images/purple-img-0.png'
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

const getDownLoadUrl = (type) => {
  switch (type) {
    case 'android':
      return 'https://s3.dualstack.ap-southeast-1.amazonaws.com/menghuansg.com/CDN/GameApk/sanguo.apk'
    case 'ios':
      return 'itms-services://?action=download-manifest&url=https://a-x.ppbao.cloud/plist/567.plist'
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
    window.location.href = url
  }

  const onCopy = async() => {
    await navigator.clipboard.writeText('R99999');
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
          <div className='card yellow'>
            <div className='bottom-border' />
            <div className='bottom-bg' />
            <div className='left-bg' />
            <div className='right-bg' />
            <CardTitle>
              <img src={YellowImg0Image} />
            </CardTitle>
            <div className='card-main'>
              <div className='img-1'>
                <img src={YellowImg1Image} />
              </div>
              <div className='img-2'>
                <img src={YellowImg2Image} />
              </div>
              <a className='img-3' onClick={onCopy}>
                <img src={YellowImg3Image} />
              </a>
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
              <div className='img-9'>
                <img src={YellowImg9Image} />
              </div>
              <div className='img-10'>
                <img src={YellowImg10Image} />
              </div>
            </div>
          </div>

          <div className='card purple'>
            <div className='bottom-border' />
            <div className='bottom-bg' />
            <div className='left-bg' />
            <div className='right-bg' />
            <CardTitle>
              <img src={PurpleImg0Image} />
            </CardTitle>
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
            <div><b>游戏交流群:</b>854611971</div>
            <div>进群备注三国手游</div>
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


const CardTitle = ({ children }) => {
  return (
    <div className='title'>
      <div className='text'>{children}</div>
      <div className='border' />
    </div>
  )
}

export default App
