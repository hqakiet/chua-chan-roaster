import { Mail, MapPin, Phone, Send, ShieldCheck } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const emailJS = {
  servicesID: 'kiethqa051197@gmail.com',
  templateID: 'template_tzu970m',
  publicKey: 'qBcUlGTEiN6qvadoM'
};

const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle'
  );
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setStatus('submitting');

    emailjs
      .sendForm(
        emailJS.servicesID,
        emailJS.templateID,
        form.current || '',
        emailJS.publicKey
      )
      .then((response) => {
        if (response.status === 200) {
          setStatus('success');
          e.target.reset();
          setTimeout(() => setStatus('idle'), 5000);
        }
      })
      .catch((error) => {
        alert('Lỗi khi gửi thư. Vui lòng thử lại!' + error.text);
        setStatus('idle');
      });
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: '#fff', borderTop: '1px solid var(--border-color)' }}
    >
      <div className="container contact-grid">
        <div>
          <h2 className="section-title">Kết Nối Với Chúng Tôi</h2>
          <p className="section-desc" style={{ marginLeft: 0 }}>
            Trải nghiệm hương vị bản nguyên tại cửa hàng hoặc gửi tin nhắn trực
            tiếp để được đội ngũ của chúng tôi tư vấn chi tiết.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <MapPin size={28} />
              </div>
              <div>
                <h4>Trụ Sở Chính</h4>
                <p>174 Ngô Quyền, xã Xuân Lộc, tỉnh Đồng Nai</p>
              </div>
            </div>
            <div className="info-item">
              <div
                className="info-icon"
                style={{ background: '#e0e7ff', color: '#1E3A8A' }}
              >
                <Phone size={28} />
              </div>
              <div>
                <h4>Hotline</h4>
                <p style={{ fontSize: '20px', color: 'var(--text-dark)' }}>
                  0889 604 234
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <Mail size={28} />
              </div>
              <div>
                <h4>Email</h4>
                <p>chuachanroaster@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="contact-form-card">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-row">
                <div>
                  <label className="form-label">Họ và tên *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-input"
                    placeholder="Nhập tên của bạn"
                  />
                </div>
                <div>
                  <label className="form-label">Số điện thoại *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="form-input"
                    placeholder="0909 123 456"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="email@example.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Nội dung quan tâm *</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="form-input"
                  style={{ resize: 'none' }}
                  placeholder="Bạn cần tư vấn về sản phẩm, máy móc..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  opacity: status === 'submitting' ? 0.7 : 1
                }}
              >
                {status === 'submitting' ? 'Đang gửi...' : 'Gửi '}{' '}
                <Send size={20} />
              </button>

              {status === 'success' && (
                <div className="form-success">
                  <ShieldCheck size={24} /> Cảm ơn bạn đã gửi tin nhắn. Chúng
                  tôi sẽ liên hệ lại sớm nhất!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="map-container">
          <iframe
            src="https://maps.google.com/maps?q=174%20Ngô%20Quyền,%20Xuân%20Lộc,%20Đồng%20Nai&t=&z=15&ie=UTF8&iwloc=&output=embed"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
