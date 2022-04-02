import { Row, Col, List, Comment, Rate } from 'antd'

const data = [
  {
    author: 'Nguyễn Văn Cường',
    avatar: <img src='img/avt-boy.webp' alt='img' />,
    content: (
      <p style={{ textAlign: 'left' }}>
        Sản phẩm chất lượng cao, rất hài lòng.
      </p>
    ),
    rate: 4.5
  },
  {
    author: 'Hoàng Mỹ Uyên',
    avatar: <img src='img/avt-girl.jpg' alt='img' />,
    content: (
      <p style={{ textAlign: 'left' }}>
        Dùng khá ổn, mình sẽ giới thiếu thêm cho bạn bè về sản phẩm này.
      </p>
    ),
    rate: 5
  },
  {
    author: 'Nguyễn Đình Trọng',
    avatar: <img src='img/nam1.jpg' alt='img' />,
    content: (
      <p style={{ textAlign: 'left' }}>
        Sản phẩm tốt.
      </p>
    ),
    rate: 4.5
  },
  {
    author: 'Bùi Văn Nguyên',
    avatar: <img src='img/nam2.webp' alt='img' />,
    content: (
      <p style={{ textAlign: 'left' }}>
        Nên mua combo #2 nhé mọi người, rất hài lòng về mức giá.
      </p>
    ),
    rate: 5
  },
  {
    author: 'Trần Thanh Thảo',
    avatar: <img src='img/nu1.webp' alt='img' />,
    content: (
      <p style={{ textAlign: 'left' }}>
        Gía rẻ nhưng dùng rất đáng tiền.
      </p>
    ),
    rate: 4.5
  },
];

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 className="animate-charcter" style={{ fontSize: '40px' }}>Sản phẩm</h2>
          <p><span style={{ color: "red" }}>SALE 50%</span> :1 Combo 3 món <span style={{ color: "red", fontSize: '30px' }}>#119k</span></p>
          <p><span style={{ color: "red" }}>SALE 50%</span> :2 Combo 6 món <span style={{ color: "red", fontSize: '30px' }}>
            #249k
          </span> <span style={{ color: '#ee4d2d' }}>Miễn phí vận chuyển</span> </p>
          <p className='p-content'>
            <span style={{ fontSize: '26px' }}>Giá đỡ điện thoại thông minh</span> xoay 360 độ tuỳ chỉnh cao thấp là vật dụng không thể thiếu cho trẻ học online,người lớn xem phim đọc báo làm việc.
          </p>
          <p className='p-content'>
            <span style={{ fontSize: '26px' }}>Dây sạc 3 Cổng</span> type C, lighting,Usb sạc được mọi loại điện thoại.
          </p>
          <p className='p-content'>
            <span style={{ fontSize: '26px' }}>Củ sạc nhanh 30W</span> sạc siêu nhanh an toàn cho pin điện thoại.
          </p>
        </div>



        <h2 className="animate-charcter" style={{ fontSize: '40px' }}>CAM KẾT</h2>
        <div className='about-text'>

          <Row justify='center'>
            <Col style={{ textAlign: 'left' }}>
              <ul>
                <li>Sản phẩm loại 1 chất lượng cao</li>
                <li>Bảo hành 3 tháng</li>
                <li>Lỗi 1 đổi 1</li>
              </ul>
            </Col>
          </Row>
        </div>

        <Row justify='center'>
          <Col><img src="img/bgaa.jpg" alt="img" style={{ width: '100%', height: 'auto' }} /></Col>
        </Row>

        <br />

        <h2 className="animate-charcter" style={{ fontSize: '40px' }}>ĐÁNH GIÁ</h2>

        <List
          className="comment-list"
          header={`${data.length} đánh giá`}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <li>
              <Comment
                actions={item.actions}
                author={<span>{item.author}    <Rate allowHalf disabled defaultValue={item.rate} /></span>}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
            </li>
          )}
        />
      </div>
    </div>
  )
}
