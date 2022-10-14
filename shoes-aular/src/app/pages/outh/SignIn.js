import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from "react";
import { Button, Input } from "../../components/commons";
import LoadingLottie from '@src/app/components/commons/loading/LoadingLottie';
import { generateErrorForm } from '@src/utils/util';
import { useNotifyContent } from "@src/contexts/NotifyProvider";
import { conectorServices } from '@src/services/api-conector';
import { setOuth } from '@src/services/storage.service';
const userService = conectorServices('Users');

export const userError = (userName) => {
  const validate = {
    email: true,
    password: true,
  }
  if (userName) validate.userName = true;
  return validate;
};

const SignIn = ({ register = false }) => {
  let [queryParams] = useSearchParams();
  const url = queryParams.get('url');
  const navegate = useNavigate();
  const [err, setErr] = useState({});
  const [loading, setLoading] = useState(false);
  const [user, setUSer] = useState({});
  const [messageErr, setMessageErr] = useState('')
  const { handleNotify } = useNotifyContent();

  const handleValue = (key, value) => {
    user[key] = value;
    setUSer({ ...user });
    delete err[key];
  };

  const onSave = async () => {
    const error = generateErrorForm(userError(register), user);
    if (error) {
      setErr(error);
      return;
    }
    setMessageErr(false);
    let outh = null;
    try {
      setLoading(true)
      if (register) {
        const [data] = await userService.find('email', user.email);
        if (data) {
          setMessageErr('User already exists');
          return;
        }
        const newUser = await userService.create({ ...user, role: 'user' });
        const { id, role, email, userName } = await userService.getById(newUser.id);
        outh = { id, role, email, userName };
      } else {
        const [data] = await userService.find('email', user.email);
        if (!data) {
          setMessageErr('User does not exist');
          return;
        }
        if (data.password !== user.password) {
          setMessageErr('Invalid password')
          return;
        }
        outh = { id: data.id, user: data.userName, email: data.email, role: data.role };
      }
      if (outh) {
        setOuth(outh);
      }
      if (outh.role === 'admin') navegate('/');
      else navegate(url ? `/${url}` : `/myShopping/${outh.id}`);
    } catch (err) {
      console.error(err);
      handleNotify("Task Error", "error");
    } finally {
      setLoading(false)
    }
  };
  const reset = () => {
    setErr({});
    setMessageErr('')
  }
  return (
    <>
      <main id="main-container">
        {loading ? (<>
          <LoadingLottie loading={loading} />
        </>) : (<>
          <section className="h-100 gradient-form">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                  <div className="card rounded-3 text-black">

                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">
                          <div className="text-center">
                            <img src="https://us.123rf.com/450wm/jkazanceva/jkazanceva1605/jkazanceva160500018/57040741-conjunto-de-zapatos-de-contorno-brillante-zapatilla-de-deporte-de-dibujos-animados-aislado-en-blanco.jpg?ver=6"
                              style={{ width: "185px" }} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1">We are The Shoes Aular</h4>
                          </div>

                          <form>
                            <p>Please login to your account</p>
                            {messageErr &&
                              <div role="alert" style={{ backgroundColor: '#ed9898', padding: '10px', borderRadius: '3px', marginBottom: '10px' }}>
                                <span className="text-center text-danger">{messageErr}</span>
                              </div>
                            }

                            {
                              register &&
                              <Input
                                title="User name"
                                type="text"
                                error={err.userName}
                                value={user?.userName}
                                onChange={(e) => handleValue("userName", e.target.value)}
                              />
                            }

                            <Input
                              title="Email"
                              type="email"
                              error={err.email}
                              value={user?.email}
                              onChange={(e) => handleValue("email", e.target.value)}
                            />

                            <Input
                              title="Password"
                              type="password"
                              error={err.password}
                              value={user?.password}
                              onChange={(e) => handleValue("password", e.target.value)}
                            />

                            <div className="text-center pt-1 mb-1 pb-1">
                              <Button variant="primary" textButton={register ? 'Register' : 'Login'} className='btn btn-default font-weight-bolder btn-hover-primary btn-primary btn-sm w-100 mt-10' click={() => onSave()} />

                            </div>
                            <div className="text-center pt-1 mb-5 pb-1">
                              <Link
                                className="btn btn-default font-weight-bolder btn-hover-secondary btn-secondary btn-sm w-100"
                                to="/"
                              >
                                Go to the store
                              </Link>
                            </div>

                            <div className="d-flex align-items-center justify-content-center pb-4">
                              <p className="mb-0 me-2">Don't have an account?</p>
                              <Link to={`${register ? '/Login' : '/Register'}${url ? '?url=cart' : ''}`} type="button" onClick={() => reset()} className="btn btn-outline-danger">{register ? 'Login' : 'Create new'}</Link>
                            </div>

                          </form>

                        </div>
                      </div>
                      <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                          <h4 className="mb-4">We are more than just a company</h4>
                          <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </>)}

      </main>
    </>
  );
};

export default SignIn;