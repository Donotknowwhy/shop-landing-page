import { Button, Form, Input, notification } from 'antd';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

const initialState = {
  name: '',
  address: '',
  phone: '',
  content: '',
  email: ""
}

const data = ['Nguyễn Hồng Thái', 'Đào Quỳnh Như', 'Trần Diệu Linh', 'Nguyễn Đức Hùng', 'Trần Văn Bách', 'Nguyễn Đình Long', 'Lê Thị Quyên', 'Đào Văn Nam', 'Lê Trọng Phú']

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(name, email, message)
    console.log(e.target)
    emailjs
      .sendForm(
        'service_bfc9b4s', 'template_qpnp0i8', e.target, 'DpWVZFAGGqTb_5sIi'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
          notification.success(
            {
              message: 'Đặt hàng thành công',
              description: "Chúng tôi sẽ sớm liên hệ cho bạn qua số điện thoại. Xin cảm ơn bạn đã quan tâm đến sản phẩm của chúng tôi",
              placement: 'bottom'
            }
          )
        },
        (error) => {
          console.log(error.text)
          notification.error(
            {
              message: 'Lỗi',
              description: "Có vẻ đã xảy ra lỗi xin vui lòng thử lại",
              placement: 'bottom'
            }
          )
        }
      )
  }


  useEffect(() => {
    setInterval(() => {
      notification.success(
        {
          message: <p>{data[Math.floor(Math.random() * data.length)]}</p>,
          description: "Vừa đặt hàng thành công",
          placement: 'topLeft',
          duration: 2,
        }
      )
    }, 6000)
  }, [])

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className=' col-md-2'></div>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Đặt hàng</h2>
                <p>
                  Hãy điền vào những thông tin bên dưới. Chúng tôi sẽ sớm liên hệ để chốt đơn với bạn.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Tên'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='address'
                        name='address'
                        className='form-control'
                        placeholder='Địa chỉ'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <input
                        type='number'
                        id='phone'
                        name='phone'
                        className='form-control'
                        placeholder='Số điện thoại'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Nội dung'
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <div className='form-group' style={{ textAlign: 'center' }}>
                  <button type='submit' className='btn btn-custom btn-danger btn-lg' style={{ fontSize: '20px', background: 'red' }}>
                    Mua ngay
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>

      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; Landing Page Design By{' '}
            <a href='https://join.skype.com/invite/wPvzBYpDn8n9' rel='nofollow' target='blank'>
              Kiencx999
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
